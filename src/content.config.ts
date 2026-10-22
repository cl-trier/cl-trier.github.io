import { defineCollection, reference } from 'astro:content';

import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
    pages: defineCollection({
        loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
        schema: z.object({
            menuLabel: z.string(),
            metaTitle: z.string(),
            metaDescription: z.string().default(""),
            navIndexed: z.boolean().default(true)
        }),
    }),

    // meta: image, name, position, links | content: person introduction
    persons: defineCollection({
        loader: glob({ base: './src/content/persons', pattern: '**/*.{md,mdx}' }),
        schema: ({ image }) => z.object({
            name: z.string(),
            position: z.string(),
            image: image().optional(),
            links: z.array(z.object({
                label: z.string(),
                url: z.string(),
            })).default([]),
        }),
    }),

    // meta: logo, title, funding, duration, contact (person), involved (persons) | content: project description
    projects: defineCollection({
        loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
        schema: ({ image }) => z.object({
            title: z.string(),
            logo: image().optional(),
            funding: z.string(),
            duration: z.object({
                start: z.coerce.date(),
                end: z.coerce.date().optional(),   // omit for ongoing projects
            }),
            contact: reference('persons'),
            involved: z.array(reference('persons')).default([]),
        }),
    }),

    // meta: title, authors (persons), venue, year, link, project | content: abstract
    publications: defineCollection({
        loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
        schema: z.object({
            title: z.string(),
            authors: z.array(reference('persons')).min(1),
            venue: z.string(),
            year: z.number().int(),
            link: z.string().optional(),
            project: reference('projects').optional(),
        }),
    }),
};
