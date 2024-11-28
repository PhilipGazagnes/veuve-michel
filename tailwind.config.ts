import type { Config } from 'tailwindcss'
import tailwindPreset from './tailwind.preset'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  presets: [tailwindPreset],
  plugins: [],
} satisfies Config
