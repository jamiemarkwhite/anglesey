# Contributing

Suggestions and fixes are welcome. You can open an issue to suggest a place or report something out of date, or open a pull request with the change.

## Add or edit a place

Each place is one Markdown file in `src/content/places/`. Copy an existing file and change it.

```md
---
title: "Pili Palas"
emoji: "🦋"
tagline: "rainy day favourite"
category: family
order: 2
url: "https://www.pilipalas.co.uk/"
summary: "A tropical paradise housing exotic creatures from around the world."
---

- Butterflies, birds, reptiles, insects and small animals
- Soft play area for children
```

| Field | What it does |
| --- | --- |
| `title` | Place name. |
| `emoji` | One emoji shown next to the name. The site uses emoji instead of photos. |
| `tagline` | A few words shown on the home page. Keep it under about 30 characters. |
| `category` | One of the ids in `src/categories.ts`. |
| `order` | Position within its category, lowest first. |
| `url` | The place's official website, or a map link if it has none. |
| `summary` | One or two sentences shown at the top of the place's page. |
| `area` | Optional. The `title` of a town. The place is then also listed on that town's page. |

The file name becomes the page address, so `pili-palas.md` is `/places/pili-palas`. Use lower case and hyphens.

The body is a bullet list of practical details: what's there, prices, parking, dogs, tips.

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
