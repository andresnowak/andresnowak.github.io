import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapterStatic({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
	},

	experimental: {
		useVitePreprocess: true
	},

	target: '#svelte'
};

export default config;
