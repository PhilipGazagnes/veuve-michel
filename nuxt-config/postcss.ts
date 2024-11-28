import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigPostCss: { postcss: NuxtConfig['postcss'] } = {
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}
