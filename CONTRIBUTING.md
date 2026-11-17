# Contributing

Suggestions and fixes are welcome. You can open an issue to suggest a place or report something out of date, or open a pull request with the change.

## Add or edit a place

Each place is one Markdown file in `src/content/places/`. Copy an existing file and change it.

```md
---
title: "Pili Palas"
tagline: "rainy day favourite"
category: family
order: 2
url: "https://www.pilipalas.co.uk/"
summary: "A tropical paradise housing exotic creatures from around the world."
photo: "./pili-palas.jpg"
credit:
  author: "Richard Hoare"
  license: "CC BY-SA 2.0"
  licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0"
  source: "https://commons.wikimedia.org/wiki/File:A_Millipede_at_Pili_Palas_-_geograph.org.uk_-_2422953.jpg"
emoji: "🦋"
lat: 53.23509
lng: -4.18654
activities: [wildlife, indoors, playgrounds]
---

- Butterflies, birds, reptiles, insects and small animals
- Soft play area for children
```

| Field | What it does |
| --- | --- |
| `title` | Place name. |
| `tagline` | A few words shown on the home page. Keep it under about 30 characters. |
| `category` | One of the ids in `src/categories.ts`. |
| `order` | Position within its category, lowest first. |
| `url` | The place's official website, or a map link if it has none. |
| `summary` | One or two sentences shown at the top of the place's page. |
| `area` | Optional. The English `title` of a town. The place is then also listed on that town's page. |
| `photo` | Optional. A landscape photo saved next to the Markdown file, named after it. |
| `emoji` | Required. The place's pin on the map, and shown large on a pink background when there is no photo. |
| `lat`, `lng` | Required. Where the pin goes on the map, in decimal degrees (Anglesey plus the mainland along the A55 and Menai Strait). Copy them from [OpenStreetMap](https://www.openstreetmap.org) (right-click, "Show address"). |
| `activities` | Optional list for the activity filter: `beach`, `crabbing`, `rockpools`, `walks`, `wildlife`, `history`, `indoors`, `playgrounds`, `food`. |
| `tides` | Optional BBC tide station id, for places where the tide matters. Adds a tide times button. The ids are in `src/activities.ts`. |
| `credit` | Required with a photo. `author` and `license`, plus `licenseUrl` and `source` links where there are any. |

The file name becomes the page address, so `pili-palas.md` is `/places/pili-palas`. Use lower case and hyphens.

The body is a bullet list of practical details: what's there, prices, parking, dogs, tips.

## Photos

Photos show in full colour, with a small saturation lift so photos from different places and cameras look like one set. Use the original colour photo.

- Landscape, at least 1280px wide. Keep files under about 500KB.
- Your own photos are best. Credit yourself and pick a licence, e.g. `license: "CC BY 4.0"`.
- Otherwise use photos with a licence that allows reuse, such as CC BY, CC BY-SA or CC0. [Wikimedia Commons](https://commons.wikimedia.org) and [Geograph](https://www.geograph.org.uk) cover most of the island.
- Credit the author exactly as the source asks and link to the source page.
- Photos must show the actual place.

A place without a photo shows its `emoji` large in the photo's place, on a pink background.

## Welsh translations

The Welsh site is under `/cy/`. Each place has a Welsh file with the same name in `src/content/places-cy/`. It holds only the text that changes between languages: `title`, `tagline`, `summary` and the bullet list. Everything else, such as the photo, category and website link, comes from the English file.

```md
---
title: "Porthaethwy"
tagline: "tref a phont Fictoraidd"
summary: "Tref Fictoraidd hardd ar lan Afon Menai..."
---

- Cerddwch ar hyd Promenâd y Belgiaid o dan y bont
```

Keep facts, prices and links the same as in the English file. Links to other places start with `/cy/places/`. If a place has no Welsh file, its Welsh page shows the English text.

The rest of the site's text, in both languages, is in `src/i18n/ui.ts`.

The Welsh text is machine translated, and every Welsh page says so. Corrections from Welsh speakers are very welcome. Each Welsh page links to the file it comes from.

## What we accept

- Places on Anglesey, or day trips close enough to do from the island.
- Details you have checked yourself or can link to. Say in the pull request how you know.
- British English.
- No affiliate links, adverts or paid placements.

## Check your change

You need Node 22.23.4 or newer (`nvm use` picks it up from `.nvmrc`).

```sh
npm install
npm run check
npm run dev
```

`npm run check` fails if a place is missing a field or uses a category that doesn't exist. The same check runs on every pull request.

## Licence

By contributing you agree that your code is released under the [MIT licence](LICENSE) and your guide content under [CC BY 4.0](LICENSE-CONTENT.md).
