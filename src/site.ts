export const repoUrl = 'https://github.com/jamiemarkwhite/anglesey';
export const suggestPlaceUrl = `${repoUrl}/issues/new?template=suggest-a-place.yml`;
export const editUiStringsUrl = `${repoUrl}/edit/main/src/i18n/ui.ts`;

export function editPlaceUrl(id: string) {
  return `${repoUrl}/edit/main/src/content/places/${id}.md`;
}

export function editPlaceTranslationUrl(id: string) {
  return `${repoUrl}/edit/main/src/content/places-cy/${id}.md`;
}

export function newPlaceTranslationUrl(id: string) {
  return `${repoUrl}/new/main/src/content/places-cy?filename=${id}.md`;
}

// PostHog project API key (public, safe to commit). Analytics stays off while this is empty.
export const posthogKey = '';
export const posthogHost = 'https://eu.i.posthog.com';
