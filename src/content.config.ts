import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './categories';

export const credit = z.object({
  author: z.string(),
  license: z.string(),
  licenseUrl: z.url().optional(),
  source: z.url().optional(),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        tagline: z.string(),
        category: z.enum(categoryIds),
        order: z.number(),
        url: z.url(),
        summary: z.string(),
        area: z.string().optional(),
        photo: image().optional(),
        credit: credit.optional(),
      })
      .refine((d) => !d.photo || d.credit, { message: 'A place with a photo needs a credit', path: ['credit'] }),
});

export const collections = { places };
