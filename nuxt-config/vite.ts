import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigVite: { vite: NuxtConfig['vite'] } = {
  vite: {
    build: {
      assetsInlineLimit: 1048, // 1kb
    },
  },
}
