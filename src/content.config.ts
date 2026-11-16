import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './categories';

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    title: z.string(),
    emoji: z.string(),
    tagline: z.string(),
    category: z.enum(categoryIds),
    order: z.number(),
    url: z.url(),
    summary: z.string(),
    area: z.string().optional(),
  }),
});

export const collections = { places };
