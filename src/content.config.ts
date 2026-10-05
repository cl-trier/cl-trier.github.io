import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
    pages: defineCollection({
        loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
        schema: z.object({
            menuLabel: z.string(),
            metaTitle: z.string(),
            metaDescription: z.string().default(""),
        }),
    })
};