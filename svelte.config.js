import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapterStatic({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
	},

	experimental: {
		useVitePreprocess: true
	}
};

export default config;
