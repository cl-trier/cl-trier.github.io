import { getCollection } from "astro:content";

import { ROUTES, getPersons, getProjects, personHref, projectHref } from "@lib/content";

export interface MenuItem {
    label: string;
    href: string;
    children: MenuItem[];
    separated?: boolean;
}

// current path with a trailing slash, comparable to menu hrefs
export const currentPath = (url: URL) => url.pathname.replace(/\/?$/, "/");

const leaf = (label: string, href: string): MenuItem => ({ label, href, children: [] });

function getHref(id: string): string {
    return id === "index" ? "/" : `/${id}/`;
}

async function getPageItems(): Promise<MenuItem[]> {
    const pages = await getCollection("pages", ({ data }) => data.navIndexed);
    const menuItems = new Map<string, MenuItem>();
    const topLevelItems: MenuItem[] = [];

    for (const page of pages) {
        menuItems.set(page.id, {
            ...leaf(page.data.menuLabel, getHref(page.id)),
            separated: page.data.navSeparated,
        });
    }

    for (const page of pages) {
        const item = menuItems.get(page.id);
        const parentId = page.id.includes("/")
            ? page.id.slice(0, page.id.lastIndexOf("/"))
            : undefined;
        const parent = parentId ? menuItems.get(parentId) : undefined;

        if (!item || !parent) {
            if (item) topLevelItems.push(item);
            continue;
        }

        parent.children.push(item);
    }

    return topLevelItems;
}

async function getCollectionItems(): Promise<MenuItem[]> {
    const projects = await getProjects();
    const persons = await getPersons();

    return [
        {
            ...leaf("Projects", ROUTES.projects),
            children: projects.map((p) => leaf(p.data.shortTitle, projectHref(p.id))),
        },
        {
            ...leaf("People", ROUTES.people),
            children: persons.map((p) => leaf(p.data.name, personHref(p.id))),
        },
    ];
}

export async function getMenuItems(): Promise<MenuItem[]> {
    return [...(await getPageItems()), ...(await getCollectionItems())];
}

// a section (top-level item with sub pages) replaces the main menu while it or one of its sub pages is active
export function findSection(items: MenuItem[], path: string): MenuItem | undefined {
    return items.find((item) => item.href !== "/" && item.children.length > 0 && path.startsWith(item.href));
}
