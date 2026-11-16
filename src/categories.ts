export const categoryIds = [
  'family',
  'beaches',
  'history',
  'unique',
  'wildlife',
  'towns',
  'pubs',
  'day-trips',
  'seasonal',
] as const;

export type CategoryId = (typeof categoryIds)[number];
