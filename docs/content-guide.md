# Content guide

How to write or update place content on this site, for people and for AI tools. `CONTRIBUTING.md` covers the file format; this covers what goes in it.

## Who it's for

Parents visiting Anglesey with young children. Every sentence should help them decide whether to go, or what to bring, expect or avoid.

## What the owner writes, and what you can write

- **`summary` and `tagline` are curated by the owner.** Don't rewrite, lengthen or add keywords to them. If one is factually wrong, flag it and leave the fix to the owner.
- **The bullets are the owner's first-hand notes.** Keep their voice. Don't reword them. Flag errors (old prices, closed cafés) rather than changing them, unless asked.
- **The intro paragraph** above the bullets, and new sections asked for, can be drafted.

## Intro paragraphs

- 2 to 3 sentences, under about 60 words.
- Say what the place is, then the practical points the bullets don't cover: buggy access, baby changing, toilets, dogs, terrain, parking, whether it works on a wet day, when it's open.
- Don't repeat the bullets or the summary.
- Neutral voice. No "I" or "my kids"; the bullets carry the owner's voice.

## Style

- British English.
- No em or en dashes. Use commas, full stops or hyphens.
- Plain words and short sentences. Say the fact, not how good it is.
- No filler: "it's worth noting", "whether you're... or...", "a great day out".

## Facts and sources

- **Don't make anything up.** Every fact must come from the owner, the existing page, or a source you have opened.
- **Cite every researched fact on the page.** Add the page you got it from to the place's `sources` list. Facts from the owner's own visits don't need one.
- **Open each link before citing it** and check it still says that. If you can't find a source for a fact, leave the fact out.
- **Prefer official sources:** the place's own website, Cadw, National Trust, RSPB, Natural Resources Wales, Trinity House, Isle of Anglesey County Council. Use Wikipedia for history when nothing official covers it.
- **Label each source with the publisher's name,** e.g. "Cadw" or "Wikipedia". If one page cites two links from the same publisher, make the labels distinct, e.g. "Cadw: Conwy Castle" and "Cadw: Plas Mawr".
- **Avoid facts that change often:** prices, exact opening hours, offers. A stable rule, such as free entry or the usual open days, is fine if the official site states it.
- **Use the business's own spelling** of its name, e.g. "Melin Llynon", "Mônuts".

## Process for AI-generated content

1. Read the place's Markdown file and its existing intro, bullets and summary.
2. Research using the sources above. Record each claim with the URL that supports it.
3. Draft the text.
4. Have a separate agent fact-check the draft. It opens every source again, assumes the draft may be wrong, and also flags errors in the existing page. Don't give it your conclusions.
5. Apply the fixes, add `sources`, and run `npm run check` and `npm run build`.
6. Open a pull request. Check the Vercel preview before merging. List any errors found in the existing text in the PR description; don't fix them unasked.

## Photos

- Photos must show the actual place.
- No photos where other people's children can be recognised. The owner's own children are fine.
- Credit the author and licence as the source asks.

## Welsh

Welsh pages live in `src/content/places-cy/` and are machine translated. New English text doesn't appear on Welsh pages until it's translated there. Keep facts and links the same as the English file.
