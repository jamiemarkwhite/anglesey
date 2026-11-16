import type { CategoryId } from '../categories';

export const locales = ['en', 'cy'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const languages: Record<Locale, { name: string; htmlLang: string }> = {
  en: { name: 'English', htmlLang: 'en-GB' },
  cy: { name: 'Cymraeg', htmlLang: 'cy' },
};

export const ui = {
  en: {
    siteName: 'Anglesey',
    homeTitle: 'Anglesey · things to do on Ynys Môn',
    description: 'Things to do on the Isle of Anglesey (Ynys Môn): beaches, castles, puffins and more.',
    tag: 'Ynys Môn guide',
    lede: 'Beaches, castles, puffins and very good chips.',
    intro:
      'Anglesey (Ynys Môn in Welsh) is an island off the northwest coast of Wales, joined to the mainland by the Menai Suspension Bridge. Sandy beaches, clifftop walks, medieval castles and quirky family days out, from chasing puffins to fish and chips by the sea.',
    headsUpLabel: 'Heads up:',
    headsUp:
      "some places close depending on weather and season. Don't always trust opening times on websites, and sometimes they're open when they say they aren't.",
    categoriesLabel: 'Categories',
    languageLabel: 'Language',
    shopsNav: 'Shops',
    shopsHeading: 'Supermarkets & shops',
    shopsHtml: [
      "All the big supermarkets are in <strong>Llangefni</strong> (ASDA, Lidl, Aldi) and <strong>Holyhead</strong>. Cross the bridge to Bangor for Tesco. If you're desperate for a McDonald's, head to Bangor or Holyhead.",
      'There are Premier convenience stores in <strong>Bethel</strong> and <strong>Newborough</strong> on the south of the island. Both will soon have walk-in beer chillers for cold beers on the beach.',
    ],
    otherGuidesHeading: 'Other guides',
    visitAnglesey: 'official tourism site',
    dayOut: 'family activities',
    footer: 'Made with care for visitors to Anglesey.',
    suggestPlace: 'Suggest a place',
    openSource: 'Open source on GitHub',
    website: 'Website',
    editPrompt: 'Something out of date? Edit this page',
    photo: 'Photo:',
    inArea: (town: string) => `In ${town}`,
  },
  cy: {
    siteName: 'Ynys Môn',
    homeTitle: "Ynys Môn · pethau i'w gwneud ar yr ynys",
    description: "Pethau i'w gwneud ar Ynys Môn: traethau, cestyll, palod a mwy.",
    tag: 'Canllaw Ynys Môn',
    lede: 'Traethau, cestyll, palod a sglodion da iawn.',
    intro:
      "Ynys oddi ar arfordir gogledd-orllewin Cymru yw Ynys Môn (Anglesey yn Saesneg), wedi'i chysylltu â'r tir mawr gan Bont Grog y Borth. Traethau tywodlyd, llwybrau ar ben clogwyni, cestyll canoloesol a diwrnodau allan difyr i'r teulu, o fynd ar ôl palod i bysgod a sglodion ger y môr.",
    headsUpLabel: 'Cofiwch:',
    headsUp:
      "mae rhai lleoedd yn cau yn dibynnu ar y tywydd a'r tymor. Peidiwch â dibynnu bob amser ar oriau agor ar wefannau, ac weithiau maen nhw ar agor pan maen nhw'n dweud nad ydyn nhw.",
    categoriesLabel: 'Categorïau',
    languageLabel: 'Iaith',
    shopsNav: 'Siopau',
    shopsHeading: 'Archfarchnadoedd a siopau',
    shopsHtml: [
      "Mae'r holl archfarchnadoedd mawr yn <strong>Llangefni</strong> (ASDA, Lidl, Aldi) a <strong>Chaergybi</strong>. Croeswch y bont i Fangor am Tesco. Os oes rhaid i chi gael McDonald's, ewch i Fangor neu Gaergybi.",
      "Mae siopau cyfleus Premier ym <strong>Methel</strong> ac yn <strong>Niwbwrch</strong> yn ne'r ynys. Cyn bo hir bydd gan y ddwy oergelloedd cwrw y gallwch gerdded i mewn iddyn nhw, ar gyfer cwrw oer ar y traeth.",
    ],
    otherGuidesHeading: 'Canllawiau eraill',
    visitAnglesey: 'gwefan dwristiaeth swyddogol',
    dayOut: "gweithgareddau i'r teulu",
    footer: "Wedi'i greu gyda gofal ar gyfer ymwelwyr ag Ynys Môn.",
    suggestPlace: 'Awgrymu lle',
    openSource: 'Cod agored ar GitHub',
    website: 'Gwefan',
    editPrompt: "Rhywbeth wedi dyddio? Golygu'r dudalen hon",
    photo: 'Llun:',
    inArea: (town: string) => `Yn ardal ${town}`,
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type UiStrings = (typeof ui)['en'];

export const categoryNames: Record<Locale, Record<CategoryId, string>> = {
  en: {
    family: 'Family attractions',
    beaches: 'Beaches & nature',
    history: 'Historic sites',
    unique: 'Unique experiences',
    wildlife: 'Puffin Island & wildlife cruises',
    towns: 'Towns & villages',
    pubs: 'Pubs',
    'day-trips': 'Day trips',
    seasonal: 'Seasonal & pick your own',
  },
  cy: {
    family: 'Atyniadau i deuluoedd',
    beaches: 'Traethau a natur',
    history: 'Safleoedd hanesyddol',
    unique: 'Profiadau unigryw',
    wildlife: 'Ynys Seiriol a theithiau bywyd gwyllt',
    towns: 'Trefi a phentrefi',
    pubs: 'Tafarndai',
    'day-trips': 'Teithiau dydd',
    seasonal: 'Tymhorol a chasglu eich hun',
  },
};

// Shown on every Welsh page, since the Welsh text is machine translated.
export const translationNote = {
  translated: {
    text: "Cyfieithiad peirianyddol yw'r dudalen hon, felly gall fod camgymeriadau ynddi.",
    link: "Os ydych chi'n siarad Cymraeg, helpwch ni i'w chywiro.",
  },
  missing: {
    text: "Nid yw'r dudalen hon wedi'i chyfieithu i'r Gymraeg eto.",
    link: "Helpwch ni i'w chyfieithu.",
  },
};

export function t(locale: Locale) {
  return ui[locale];
}

// Maps an unprefixed path such as `/places/moelfre` to its address in the given locale.
export function localePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === '/' ? '/' : path}`;
}
