export const repoUrl = 'https://github.com/jamiemarkwhite/anglesey';
export const suggestPlaceUrl = `${repoUrl}/issues/new?template=suggest-a-place.yml`;

export function editPlaceUrl(id: string) {
  return `${repoUrl}/edit/main/src/content/places/${id}.md`;
}
