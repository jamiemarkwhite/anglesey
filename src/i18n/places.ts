import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './ui';

export interface LocalizedPlace {
  id: string;
  english: CollectionEntry<'places'>;
  data: CollectionEntry<'places'>['data'];
  // The entry whose Markdown body is shown on the place page.
  entry: CollectionEntry<'places'> | CollectionEntry<'placesCy'>;
  translated: boolean;
}

// English places, with the translated fields swapped in where a translation exists.
export async function getPlaces(locale: Locale): Promise<LocalizedPlace[]> {
  const places = await getCollection('places');
  if (locale === 'en') {
    return places.map((place) => ({ id: place.id, english: place, data: place.data, entry: place, translated: true }));
  }

  const translations = new Map((await getCollection('placesCy')).map((entry) => [entry.id, entry]));
  for (const id of translations.keys()) {
    if (!places.some((place) => place.id === id)) {
      throw new Error(`src/content/places-cy/${id}.md has no matching English place`);
    }
  }

  return places.map((place) => {
    const translation = translations.get(place.id);
    return {
      id: place.id,
      english: place,
      data: translation ? { ...place.data, ...translation.data } : place.data,
      entry: translation ?? place,
      translated: translation !== undefined,
    };
  });
}

// `area` holds the English title of a town, so towns are matched on their English titles.
export async function getPlacePaths(locale: Locale) {
  const places = await getPlaces(locale);
  return places.map((place) => ({
    params: { slug: place.id },
    props: {
      place,
      town: places.find((p) => p.english.data.title === place.data.area),
      nearby: places.filter((p) => p.data.area === place.english.data.title),
    },
  }));
}
