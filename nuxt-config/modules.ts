import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigModules: { modules: NuxtConfig['modules'] } = {
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/device',
  ],
}
