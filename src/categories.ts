export const categories = [
  { id: 'family', name: 'Family attractions', emoji: '🎡' },
  { id: 'beaches', name: 'Beaches & nature', emoji: '🏖️' },
  { id: 'history', name: 'Historic sites', emoji: '🏰' },
  { id: 'unique', name: 'Unique experiences', emoji: '✨' },
  { id: 'wildlife', name: 'Puffin Island & wildlife cruises', emoji: '⛴️' },
  { id: 'towns', name: 'Towns & villages', emoji: '🏘️' },
  { id: 'day-trips', name: 'Day trips', emoji: '🚂' },
  { id: 'seasonal', name: 'Seasonal & pick your own', emoji: '🍓' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const categoryIds = categories.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}
