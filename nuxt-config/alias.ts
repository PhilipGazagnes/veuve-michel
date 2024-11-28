import { fileURLToPath, URL } from 'url'
import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigAlias: { alias: NuxtConfig['alias'] } = {
  alias: {
    // Shared Alias
    // example :
    // '@shared_application': fileURLToPath(new URL('../../shared/application', import.meta.url)),
  },
}
