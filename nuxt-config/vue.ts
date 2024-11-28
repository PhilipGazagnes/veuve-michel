import type { NuxtConfig } from '@nuxt/schema'

export const nuxtConfigVue: { vue: NuxtConfig['vue'] } = {
  vue: {
    compilerOptions: {
      // isCustomElement: (tag: string) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
}
