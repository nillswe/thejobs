import daisyUI from 'daisyui'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [typography, daisyUI],
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: false,
    themeRoot: ':root',
    themes: [
      {
        thejobs: {
          'primary': '#161a30',
          'primary-focus': '#111425',
          'primary-content': '#ffffff',

          'secondary': '#31304d',
          'secondary-focus': '#2a2942',
          'secondary-content': '#ffffff',

          'neutral': '#364452',
          'neutral-focus': '#424c57',
          'neutral-content': '#ffffff',

          'base-100': '#f5f5f5',
          'base-200': '#ffffff',
          'base-300': '#eae9e9',
          'base-content': '#161a30',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.4rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.3s',

          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        thejobsDark: {
          'primary': '#ffb3d9',
          'primary-focus': '#ff80bf',
          'primary-content': '#1b1c22',

          'secondary': '#b9ffb3',
          'secondary-focus': '#8aff80',
          'secondary-content': '#1b1c22',

          'neutral': '#22212c',
          'neutral-focus': '#1b1c22',
          'neutral-content': '#d5ccff',

          'base-100': '#302f3d',
          'base-200': '#22212c',
          'base-300': '#1b1c22',
          'base-content': '#d5ccff',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.4rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.3s',

          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
}

export default config
