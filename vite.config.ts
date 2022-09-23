import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		fs: {
			strict: false
		}
	},
	resolve: {
		alias: {
			'@douganderson444/ardag-gateway': path.resolve('src/lib')
		}
	},
	optimizeDeps: {
		// force these to be pre-bundled
		// '@douganderson444/ardag', 'ardb',
		include: ['@douganderson444/ipld-car-txs', '@ipld/car', '@stablelib/base64']
	},
	build: {
		commonjsOptions: {
			include: [/node_modules/]
		}
	},
	ssr: {
		noExternal: ['arweave']
	}
};

export default config;
