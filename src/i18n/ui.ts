export const languages = {
	it: 'Italiano',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'it';

export const routes = {
	it: {
		home: '/',
		'case-vacanza': '/#case-vacanza',
		'listino-prezzi': '/#listino-prezzi',
		regolamento: '/regolamento',
		'galleria-immagini': '/galleria-immagini',
		'appartamento-in-centro-paese': '/appartamento-in-centro-paese',
		'privacy-policy': '/privacy-policy',
		'cookie-policy': '/cookie-policy',
	},
	en: {
		home: '/en/',
		'case-vacanza': '/en/#case-vacanza',
		'listino-prezzi': '/en/#listino-prezzi',
		regolamento: '/en/rules',
		'galleria-immagini': '/en/photo-gallery',
		'appartamento-in-centro-paese': '/en/city-center-apartment',
		'privacy-policy': '/en/privacy-policy',
		'cookie-policy': '/en/cookie-policy',
	},
} as const;

export type RouteKey = keyof (typeof routes)['it'];

export const ui = {
	it: {
		'nav.home': 'Benvenuti',
		'nav.apartments': 'Case Vacanza',
		'nav.prices': 'Listino Prezzi',
		'nav.rules': 'Regolamento',
		'nav.gallery': 'Galleria Immagini',
		'nav.town': 'Appartamento in Paese',
		'footer.privacy': 'Privacy Policy',
		'footer.cookie': 'Cookie Policy',
	},
	en: {
		'nav.home': 'Home',
		'nav.apartments': 'Apartments',
		'nav.prices': 'Prices',
		'nav.rules': 'Policy',
		'nav.gallery': 'Photo Gallery',
		'nav.town': 'City Center Apartment',
		'footer.privacy': 'Privacy Policy',
		'footer.cookie': 'Cookie Policy',
	},
} as const;

export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	if (first === 'en') return 'en';
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)['it']): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function useRoutes(lang: Lang) {
	return function r(key: RouteKey): string {
		return routes[lang][key];
	};
}
