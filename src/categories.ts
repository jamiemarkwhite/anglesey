export const categoryIds = [
  'family',
  'beaches',
  'history',
  'unique',
  'wildlife',
  'towns',
  'pubs',
  'day-trips',
  'en-route',
  'seasonal',
] as const;

export type CategoryId = (typeof categoryIds)[number];
