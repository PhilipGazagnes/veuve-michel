import type { Config } from 'tailwindcss'

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        textcolor: '#222',
        primary: '#4C0000',
        success: '#67c23a',
        error: '#f56c6c',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        playball: ['Playball', 'cursive']
      },
      screens: {
        xs: '480px',
      },
    },
  },
}

export default config
