import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigTypescript: { typescript: NuxtConfig['typescript'] } = {
  typescript: {
    tsConfig: {
      include: ['./custom-types.d.ts'],
      compilerOptions: {
        // types: ['@mojito/ui/types'],
      },
    },
  },
}
