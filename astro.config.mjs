// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes } from './src/i18n/ui';

const SITE = 'https://www.tenutamontincello.it';

// IT and EN pages use independently translated slugs (e.g. /regolamento vs
// /en/rules), so @astrojs/sitemap's built-in path-matching i18n option can't
// pair them up. Build the hreflang alternates ourselves from the same route
// map the app uses for navigation, so the sitemap can't drift out of sync.
const normalize = (path) => (path.endsWith('/') ? path : `${path}/`);

const alternatesByUrl = new Map();
for (const key of Object.keys(routes.it)) {
	const itPath = routes.it[key];
	const enPath = routes.en[key];
	// Skip in-page anchors (e.g. '/#listino-prezzi') — they aren't sitemap entries.
	if (itPath.includes('#') || enPath.includes('#')) continue;

	const itUrl = new URL(normalize(itPath), SITE).href;
	const enUrl = new URL(normalize(enPath), SITE).href;
	const links = [
		{ url: itUrl, lang: 'it' },
		{ url: enUrl, lang: 'en' },
		{ url: itUrl, lang: 'x-default' },
	];
	alternatesByUrl.set(itUrl, links);
	alternatesByUrl.set(enUrl, links);
}

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		sitemap({
			serialize(item) {
				const links = alternatesByUrl.get(item.url);
				if (links) item.links = links;
				return item;
			},
		}),
	],
	i18n: {
		locales: ['it', 'en'],
		defaultLocale: 'it',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
