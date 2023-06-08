import { styled } from '..'

export const BlogContainer = styled('section', {
  '.title-section': {
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    span: {
      fontWeight: 'bold',
      fontSize: '0.875rem',
    },

    h1: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: '110%',
      marginBottom: '1rem',
      color: '$purple',
    },

    p: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '150%',
      marginBottom: '2rem',
      textAlign: 'center',
    },

    '.search-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16.25rem',

      input: {
        borderLeft: '2px solid $purple',
        borderTop: '2px solid $purple',
        borderBottom: '2px solid $purple',
        borderRight: 'none',
        borderRadius: '8px 0 0 8px',
        background: '$white',
        padding: '12px 16px',
        outline: 0,
        fontWeight: '600',
        color: '$purple',

        '&::placeholder': {
          color: '$purple',
        },
      },

      button: {
        outline: 0,
        borderRight: '2px solid $purple',
        borderTop: '2px solid $purple',
        borderBottom: '2px solid $purple',
        borderLeft: 'none',
        borderRadius: '0 8px 8px 0',
        padding: '12px 16px',
        background: '$purple',
        color: '$white',
        fontWeight: '600',
        cursor: 'pointer',
        transition: '0.2s',

        '&:hover': {
          filter: 'brightness(85%)',
        },
      },
    },
  },
  '.top-trends': {
    h2: {
      marginTop: '2rem',
    },
  },
  '.second': {
    background: '$purple-100',
  },
  '.top-trend': {
    padding: '2rem 0',

    h3: {
      fontSize: '2rem',
    },

    p: {
      marginTop: '1rem',
      fontSize: '1.2rem',
    },

    a: {
      display: 'block',
      marginTop: '2rem',
      color: '$pink',
      fontWeight: 'bold',
      fontFamily: 'Sen, sans-serif',
      textDecoration: 'underline',
      transition: '0.2s',
      paddingBottom: '1rem',

      '&:hover': {
        textDecoration: 'underline',
        color: '$purple',
      },
    },
  },
})
