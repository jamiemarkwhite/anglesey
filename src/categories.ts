export const categories = [
  { id: 'family', name: 'Family attractions' },
  { id: 'beaches', name: 'Beaches & nature' },
  { id: 'history', name: 'Historic sites' },
  { id: 'unique', name: 'Unique experiences' },
  { id: 'wildlife', name: 'Puffin Island & wildlife cruises' },
  { id: 'towns', name: 'Towns & villages' },
  { id: 'day-trips', name: 'Day trips' },
  { id: 'seasonal', name: 'Seasonal & pick your own' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const categoryIds = categories.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}
