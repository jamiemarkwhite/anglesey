export const activityIds = [
  'beach',
  'crabbing',
  'rockpools',
  'walks',
  'wildlife',
  'history',
  'indoors',
  'playgrounds',
  'food',
] as const;

export type ActivityId = (typeof activityIds)[number];

export const activityEmoji: Record<ActivityId, string> = {
  beach: '🏖️',
  crabbing: '🦀',
  rockpools: '🐚',
  walks: '🥾',
  wildlife: '🐿️',
  history: '🏰',
  indoors: '☔',
  playgrounds: '🛝',
  food: '🍟',
};

// BBC Weather tide table stations on and around Anglesey, keyed by the BBC's station id.
export const tideStations = {
  '472': 'Beaumaris',
  '473': 'Menai Bridge',
  '475': 'Caernarfon',
  '476': 'Trwyn Dinmor',
  '476a': 'Moelfre',
  '477': 'Amlwch',
  '477a': 'Cemaes Bay',
  '478': 'Holyhead',
  '479': 'Trearddur Bay',
  '479a': 'Porth Trecastell',
  '480': 'Llanddwyn Island',
} as const;

export type TideStationId = keyof typeof tideStations;

export const tideStationIds = Object.keys(tideStations) as [TideStationId, ...TideStationId[]];

export function tideTableUrl(id: TideStationId) {
  return `https://www.bbc.co.uk/weather/coast-and-sea/tide-tables/11/${id}`;
}
