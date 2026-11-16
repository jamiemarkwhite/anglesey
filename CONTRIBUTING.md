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
  author: "Alan Hughes"
  license: "CC BY-SA 2.0"
  licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0"
  source: "https://commons.wikimedia.org/wiki/File:Pili_Pala_-_geograph.org.uk_-_7573309.jpg"
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
| `area` | Optional. The `title` of a town. The place is then also listed on that town's page. |
| `photo` | Optional. A landscape photo saved next to the Markdown file, named after it. |
| `emoji` | Required if there is no photo. Shown large, with the same print tint, in place of the photo. |
| `credit` | Required with a photo. `author` and `license`, plus `licenseUrl` and `source` links where there are any. |

The file name becomes the page address, so `pili-palas.md` is `/places/pili-palas`. Use lower case and hyphens.

The body is a bullet list of practical details: what's there, prices, parking, dogs, tips.

## Photos

Every photo gets the same pink and blue print treatment, so photos from different places and cameras look like one set. Use the original colour photo - the site applies the tint.

- Landscape, at least 1280px wide. Keep files under about 500KB.
- Your own photos are best. Credit yourself and pick a licence, e.g. `license: "CC BY 4.0"`.
- Otherwise use photos with a licence that allows reuse, such as CC BY, CC BY-SA or CC0. [Wikimedia Commons](https://commons.wikimedia.org) and [Geograph](https://www.geograph.org.uk) cover most of the island.
- Credit the author exactly as the source asks and link to the source page.
- Photos must show the actual place.

A place without a photo needs an `emoji` instead. It is shown large in the photo's place, with the same tint.

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
