export const categoryIds = [
  'family',
  'beaches',
  'history',
  'unique',
  'wildlife',
  'towns',
  'day-trips',
  'seasonal',
] as const;

export type CategoryId = (typeof categoryIds)[number];
