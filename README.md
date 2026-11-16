# Anglesey

A guide to things to do on Anglesey (Ynys Môn). Astro static site, hosted on Vercel.

Live site: https://anglesey.vercel.app

## Run it

```sh
npm install
npm run dev
```

`npm run check` type-checks the site and validates the content. `npm run build` writes the site to `dist/`.

## Content

Each place is a Markdown file in `src/content/places/`. The frontmatter sets the name, short tagline shown on the home page, category, sort order, website link, and an optional photo with its credit. Photos sit next to the Markdown file. The body is the bullet list on the place's own page.

Category ids live in `src/categories.ts` and their names in `src/i18n/ui.ts`. The build fails if a place uses a category id that isn't in `src/categories.ts`.

Welsh text for each place is in `src/content/places-cy/`. See [CONTRIBUTING.md](CONTRIBUTING.md#welsh-translations).

Set `area` to a town's English title (e.g. `area: "Llangefni"`) to list a place on that town's page.

## Contributing

Suggestions and fixes are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Code is [MIT](LICENSE). Guide content is [CC BY 4.0](LICENSE-CONTENT.md).
