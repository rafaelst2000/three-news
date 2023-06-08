import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      purple: '#7639c3',
      'purple-100': '#F9F4FF',
      blue: '#092c4c',
      gray: '#2b2b2b',
      'gray-100': '#c9c9c9',
      'gray-500': '#525151',
      pink: '#d83c8f',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },

    media: {
      mobile: 'max-width: 768px',
      desktop: 'min-width: 769px',
    },
  },
})
