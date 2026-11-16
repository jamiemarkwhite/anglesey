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

Each place is a Markdown file in `src/content/places/`. The frontmatter sets the name, emoji, short tagline shown on the home page, category, sort order and website link. The body is the bullet list on the place's own page.

Categories live in `src/categories.ts`. The build fails if a place uses a category that isn't listed there.

Set `area` to a town's title (e.g. `area: "Llangefni"`) to list a place on that town's page.

## Contributing

Suggestions and fixes are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Code is [MIT](LICENSE). Guide content is [CC BY 4.0](LICENSE-CONTENT.md).
