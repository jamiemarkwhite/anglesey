import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { activityIds, tideStationIds } from './activities';
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
        featured: z.boolean().optional(),
        photo: image().optional(),
        emoji: z.string(),
        credit: credit.optional(),
        lat: z.number().min(53.1).max(53.45),
        lng: z.number().min(-4.75).max(-3.9),
        activities: z.array(z.enum(activityIds)).default([]),
        tides: z.enum(tideStationIds).optional(),
      })
      .refine((d) => !d.photo || d.credit, { message: 'A place with a photo needs a credit', path: ['credit'] }),
});

// Welsh translations of the text fields only. Everything else comes from the English file with the same name.
const placesCy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places-cy' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
  }),
});

export const collections = { places, placesCy };
