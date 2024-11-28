import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigPinia: { pinia: NuxtConfig['pinia'] } = {
  pinia: {
    storesDirs: ['./stores/**'],
  },
}
