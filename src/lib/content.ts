import { getCollection } from "astro:content";

// single source of truth for collection routes (see src/pages/projects, src/pages/people)
export const ROUTES = {
    projects: "/projects/",
    people: "/people/",
};

export const projectHref = (id: string) => `${ROUTES.projects}${id}/`;
export const personHref = (id: string) => `${ROUTES.people}${id}/`;

// projects, newest first; optionally only those a person is contact of or involved in
export async function getProjects(person?: string) {
    const projects = await getCollection("projects", ({ data }) =>
        person
            ? data.contact.id === person || data.involved.some((p) => p.id === person)
            : true
    );
    return projects.sort((a, b) => b.data.duration.start.getTime() - a.data.duration.start.getTime());
}

// persons, alphabetically; or in the given order of ids
export async function getPersons(ids?: string[]) {
    const persons = await getCollection("persons");
    return ids
        ? ids.flatMap((id) => persons.filter((p) => p.id === id))
        : persons.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

// publications, newest first then by title; optionally only those of an author
export async function getPublications(author?: string) {
    const publications = await getCollection("publications", ({ data }) =>
        author ? data.authors.some((a) => a.id === author) : true
    );
    return publications.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}
