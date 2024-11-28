import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigComponents: { components: NuxtConfig['components'] } = {
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        ignore: ['**/*.ts'],
      }
    ]
  },
}
