import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ fallback: 'index.html' }),

	kit: {
		adapter: adapterStatic({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		prerender: {
			default: true
		}
	},

	paths: {
		base: '/andresnowak.github.io'
	},

	experimental: {
		useVitePreprocess: true
	}
};

export default config;
