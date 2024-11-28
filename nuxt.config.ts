// https://nuxt.com/docs/api/configuration/nuxt-config

import {
  nuxtConfigAlias,
  nuxtConfigModules,
  nuxtConfigPostCss,
  nuxtConfigComponents,
  nuxtConfigVite,
  nuxtConfigVue,
  nuxtConfigTypescript,
  // Additional Modules
  nuxtConfigPinia,
} from './nuxt-config'

export default defineNuxtConfig({
  // fix issue does not send vue/server-renderer/index.js to .output
  // (https://github.com/nuxt/nuxt/issues/14820)
  experimental: {
    externalVue: false,
  },

  devtools: {
    enabled: true,
    vscode: {},
    timeline: {
      enabled: true,
    },
  },
  features: {
    inlineStyles: false,
  },
  css: [
    './assets/css/tailwind.css',
  ],
  ...nuxtConfigAlias,
  ...nuxtConfigVue,
  ...nuxtConfigVite,
  ...nuxtConfigModules,
  ...nuxtConfigPostCss,
  ...nuxtConfigComponents,
  ...nuxtConfigTypescript,
  // Additional Modules
  ...nuxtConfigPinia,
  // Compatibility info
  compatibilityDate: '2024-11-28',
})
