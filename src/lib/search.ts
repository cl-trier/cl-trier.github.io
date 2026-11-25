// search primitives, shared by the build (src/components/Search.astro, src/components/PageCard.astro) and the browser
// matching follows https://github.com/simon-muenker/simon-muenker.github.io (src/common/search.ts):
// accent- and case-insensitive, every term of the query must occur somewhere in the item

// searchable content types (collection names) and their labels, in default display order
export const SEARCH_TYPES = {
    pages: "Pages",
    persons: "People",
    projects: "Projects",
    publications: "Publications",
} as const;

export type SearchType = keyof typeof SEARCH_TYPES;

export type Range = [start: number, end: number];

// normalizes per character, so every normalized character maps back to its source range [start, end)
function normalizeWithOffsets(value: string) {
    let text = "";
    const starts: number[] = [];
    const ends: number[] = [];
    let index = 0;

    for (const char of value) {
        // src: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript#answer-37511463
        const normalized = char.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
        text += normalized;
        for (let i = 0; i < normalized.length; i++) {
            starts.push(index);
            ends.push(index + char.length);
        }
        index += char.length;
    }

    return { text, starts, ends };
}

// lowercase, without accents: "Münker" → "munker"
export const normalize = (value: string) => normalizeWithOffsets(value).text;

// unique normalized terms of a search phrase
export const getSearchTerms = (phrase: string) => [
    ...new Set(normalize(phrase).replace(/[,.-]/g, " ").split(/\s+/).filter(Boolean)),
];

// whether every term occurs in an already normalized text
export const matchesAll = (normalizedText: string, terms: string[]) =>
    terms.every((term) => normalizedText.includes(term));

// source ranges of all term occurrences in a text, sorted and merged
export function findMatches(text: string, terms: string[]): Range[] {
    const { text: normalized, starts, ends } = normalizeWithOffsets(text);
    const ranges: Range[] = [];

    for (const term of terms) {
        for (let i = normalized.indexOf(term); i !== -1; i = normalized.indexOf(term, i + term.length)) {
            ranges.push([starts[i], ends[i + term.length - 1]]);
        }
    }

    return ranges
        .sort((a, b) => a[0] - b[0])
        .reduce<Range[]>((merged, [start, end]) => {
            const last = merged.at(-1);
            if (last && start <= last[1]) last[1] = Math.max(last[1], end);
            else merged.push([start, end]);
            return merged;
        }, []);
}

// readable text of a markdown/mdx body: without mdx statements, tags, and markdown syntax
export const markdownToText = (markdown: string) =>
    markdown
        .replace(/^(import|export)\s.*$/gm, " ")            // mdx imports/exports
        .replace(/<(https?:\/\/[^\s>]+)>/g, "$1")           // autolinks → url
        .replace(/<[A-Z][^>]*>/g, (tag) =>                  // mdx components → their string props, except ids
            ` ${[...tag.matchAll(/(\bid\s*[:=]\s*)?"([^"]*)"/g)].map(([, id, value]) => (id ? "" : value)).join(" ")} `)
        .replace(/<[^>]*>/g, " ")                           // html tags
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")          // images and links → their text
        .replace(/^[ \t]*[|:*_-][|:*_ \t-]*$/gm, " ")       // horizontal rules, table delimiter rows
        .replace(/^[ \t]*(#{1,6}|[-*+]|\d+\.|>)[ \t]+/gm, "") // headings, list items, quotes
        .replace(/[*`]/g, "")                               // emphasis, code
        .replace(/\|/g, " ")                                // table cells
        .replace(/\s+/g, " ")
        .trim();
