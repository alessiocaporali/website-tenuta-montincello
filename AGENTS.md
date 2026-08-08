## Project

Tenuta Montincello — holiday-home rental site for Vieste (Gargano, Puglia), rebuilt on Astro from
the previous Weebly site. Bilingual: Italian pages at `src/pages/*.astro`, English mirrors at
`src/pages/en/*.astro`. Shared UI copy lives in `src/i18n/ui.ts`.

Several images under `src/assets/images/*-placeholder.jpg` are generated placeholders (labelled
"PLACEHOLDER") standing in for real property photos — swap them for real photography before
launch. `PUBLIC_FORMSPREE_ID` (see `.env`) must be set for the contact form on the homepage to
actually deliver submissions.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
