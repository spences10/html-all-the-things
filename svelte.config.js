import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: './src/lib/components',
      $lib: './src/lib',
      $stores: './src/stores',
    },
  },

  preprocess: [preprocess({})],
}

export default config
