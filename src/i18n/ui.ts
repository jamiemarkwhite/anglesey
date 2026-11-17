import type { ActivityId } from '../activities';
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
    description:
      'Things to do on Anglesey (Ynys Môn) with young kids, from years of family trips: beaches, crabbing, castles, puffins and more.',
    tag: 'Ynys Môn guide',
    lede: 'A guide for young families, built up over years of trips to the island with my kids.',
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
    rnliHeading: 'Support the RNLI',
    rnliHtml: [
      "The RNLI is the charity that runs the lifeboats around the coast. It isn't funded by the government, so it relies on donations. The crews are volunteers: they give up their own time to train, for free, and when there's a call-out they drop everything and rush to help people in danger. Anglesey has lifeboat stations at Beaumaris, Moelfre, Holyhead and Trearddur Bay.",
      'If you enjoy the beaches here, please think about <a href="https://rnli.org" target="_blank" rel="noopener">giving something to the RNLI</a>. You can see the lifeboat station and the free RNLI Seawatch Centre at <a href="/places/moelfre">Moelfre</a>, and watch the crew train at <a href="/places/trearddur-bay">Trearddur Bay</a> on Sundays at 10am.',
    ],
    otherGuidesHeading: 'Other guides',
    visitAnglesey: 'official tourism site',
    visitWales: "Wales' tourism site, Anglesey section",
    coastPath: 'walking the Anglesey coast',
    dayOut: 'family activities',
    featuredHeading: 'Big sights',
    footer: 'Made by',
    suggestPlace: 'Suggest a place',
    openSource: 'Open source on GitHub',
    website: 'Website',
    editPrompt: 'Something out of date? Edit this page',
    photo: 'Photo:',
    inArea: (town: string) => `In ${town}`,
    mapHeading: 'Map',
    mapLabel: 'Map of places on Anglesey',
    thingsHeading: 'Things to see and do',
    filterLabel: 'Filter by activity',
    allActivities: 'Everything',
    noMatches: 'Nothing matches that activity yet.',
    tideTimes: (station: string) => `Tide times: ${station}`,
    crabLabel: 'Pet crab. Press to make it jump.',
    chipsLabel: 'Chips. Press to feed the seagull.',
    gullLines: { grab: ['Mine!', 'Squawk!', 'Ta very much!', 'Chips!'], empty: 'All gone!', refill: 'Fresh chips!' },
    crabLines: {
      hi: ['Hiya!', 'Snip snip!', 'Off crabbing later?', 'Mind my toes', 'Wheee!', 'Bacon is the best bait'],
      big: ['Higher!', 'I can fly!', 'Weeeeee!'],
      dizzy: ['I feel sick...', 'Too much!', 'Put me down!'],
      scared: ['Eek!', 'Not the bucket!', 'Leave me be!'],
      wake: ['Wha? I was asleep', '5 more minutes...'],
    },
  },
  cy: {
    siteName: 'Ynys Môn',
    homeTitle: "Ynys Môn · pethau i'w gwneud ar yr ynys",
    description:
      "Pethau i'w gwneud ar Ynys Môn gyda phlant ifanc, o flynyddoedd o deithiau teulu: traethau, dal crancod, cestyll, palod a mwy.",
    tag: 'Canllaw Ynys Môn',
    lede: "Canllaw i deuluoedd ifanc, wedi'i adeiladu dros flynyddoedd o deithiau i'r ynys gyda fy mhlant.",
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
    rnliHeading: "Cefnogwch yr RNLI",
    rnliHtml: [
      "Yr RNLI yw'r elusen sy'n rhedeg y badau achub o amgylch yr arfordir. Dydy hi ddim yn cael ei hariannu gan y llywodraeth, felly mae'n dibynnu ar roddion. Gwirfoddolwyr yw'r criwiau: maen nhw'n rhoi eu hamser eu hunain i hyfforddi, am ddim, a phan ddaw galwad maen nhw'n gollwng popeth ac yn rhuthro i helpu pobl mewn perygl. Mae gorsafoedd bad achub ar Ynys Môn ym Miwmares, Moelfre, Caergybi a Bae Trearddur.",
      'Os ydych chi\'n mwynhau\'r traethau yma, ystyriwch <a href="https://rnli.org" target="_blank" rel="noopener">roi rhywbeth i\'r RNLI</a>. Gallwch weld yr orsaf bad achub a Chanolfan Seawatch yr RNLI, sydd am ddim, ym <a href="/cy/places/moelfre">Moelfre</a>, a gwylio\'r criw yn ymarfer ym <a href="/cy/places/trearddur-bay">Mae Trearddur</a> ar ddydd Sul am 10am.',
    ],
    otherGuidesHeading: 'Canllawiau eraill',
    visitAnglesey: 'gwefan dwristiaeth swyddogol',
    visitWales: 'gwefan dwristiaeth Cymru, adran Ynys Môn',
    coastPath: 'cerdded arfordir Ynys Môn',
    dayOut: "gweithgareddau i'r teulu",
    featuredHeading: 'Uchafbwyntiau',
    footer: 'Gwnaed gan',
    suggestPlace: 'Awgrymu lle',
    openSource: 'Cod agored ar GitHub',
    website: 'Gwefan',
    editPrompt: "Rhywbeth wedi dyddio? Golygu'r dudalen hon",
    photo: 'Llun:',
    inArea: (town: string) => `Yn ardal ${town}`,
    mapHeading: 'Map',
    mapLabel: "Map o leoedd ar Ynys Môn",
    thingsHeading: "Pethau i'w gweld a'u gwneud",
    filterLabel: 'Hidlo yn ôl gweithgaredd',
    allActivities: 'Popeth',
    noMatches: "Does dim byd yn cyfateb i'r gweithgaredd hwnnw eto.",
    tideTimes: (station: string) => `Amseroedd y llanw: ${station}`,
    crabLabel: "Cranc anwes. Pwyswch i wneud iddo neidio.",
    chipsLabel: "Sglodion. Pwyswch i fwydo'r wylan.",
    gullLines: { grab: ["Fi pia!", 'Sgwawc!', 'Diolch yn fawr!', 'Sglodion!'], empty: "Dim ar ôl!", refill: 'Sglodion ffres!' },
    crabLines: {
      hi: ['Helô!', 'Snip snip!', 'Dal crancod wedyn?', "Gwylia fy nhraed", 'Wiii!'],
      big: ['Uwch!', 'Dw i\'n gallu hedfan!', 'Wiiiiii!'],
      dizzy: ['Dw i\'n teimlo\'n sâl...', 'Gormod!', 'Rho fi i lawr!'],
      scared: ['Help!', 'Dim y bwced!', 'Gad lonydd i mi!'],
      wake: ['Be? Ro\'n i\'n cysgu', 'Pum munud arall...'],
    },
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
    pubs: 'Pubs & food',
    'day-trips': 'Day trips off the island',
    'en-route': 'On the way',
    seasonal: 'Seasonal & pick your own',
  },
  cy: {
    family: 'Atyniadau i deuluoedd',
    beaches: 'Traethau a natur',
    history: 'Safleoedd hanesyddol',
    unique: 'Profiadau unigryw',
    wildlife: 'Ynys Seiriol a theithiau bywyd gwyllt',
    towns: 'Trefi a phentrefi',
    pubs: 'Tafarndai a bwyd',
    'day-trips': "Teithiau dydd oddi ar yr ynys",
    'en-route': 'Ar y ffordd',
    seasonal: 'Tymhorol a chasglu eich hun',
  },
};

export const activityNames: Record<Locale, Record<ActivityId, string>> = {
  en: {
    beach: 'Beaches',
    crabbing: 'Crabbing & fishing',
    rockpools: 'Rock pools',
    walks: 'Walks',
    wildlife: 'Wildlife',
    history: 'History',
    indoors: 'Indoors',
    playgrounds: 'Playgrounds',
    food: 'Food & drink',
  },
  cy: {
    beach: 'Traethau',
    crabbing: 'Dal crancod a physgota',
    rockpools: 'Pyllau glan môr',
    walks: 'Teithiau cerdded',
    wildlife: 'Bywyd gwyllt',
    history: 'Hanes',
    indoors: 'Dan do',
    playgrounds: 'Meysydd chwarae',
    food: 'Bwyd a diod',
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
