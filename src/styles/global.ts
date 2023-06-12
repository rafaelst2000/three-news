import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 'transparent',
  },

  body: {
    backgroundColor: '$white',
    color: '$blue',
    '-webkit-font-smoothing': 'antialiased',
  },

  li: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
    '&:visited': {
      color: 'unset',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Sen, sans-serif',
    fontWeight: 700,
  },

  '.button': {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: '2px solid transparent',
    fontWeight: '500',
    cursor: 'pointer',
    transition: '0.3s',
  },

  '.outlined-button': {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    background: 'transparent',
    border: '2px solid $purple',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s',
    color: '$purple',

    '&:hover': {
      background: '$purple',
      color: '$white',
    },
  },

  '.container': {
    maxWidth: '1400px',
    padding: '0 20px',
    margin: '0 auto',
  },

  '.shadow': {
    boxShadow: '0 0 8px rgba(43, 43, 43, 0.1)',
  },

  '@media (width <= 1260px)': {
    html: {
      fontSize: '87.5%',
    },
  },

  '@media (width <= 768px)': {
    html: {
      fontSize: '83.5%',
    },

    '.header ul li': {
      display: 'none',
    },
  },
})
