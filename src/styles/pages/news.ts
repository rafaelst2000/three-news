import { styled } from '..'

export const NewsContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '14rem 2fr 1.2fr',
  gridTemplateAreas: "'nav main aside'",
  marginTop: '5rem',
  gap: '2rem',

  nav: {
    animation: 'slideFromLeft 0.4s ease-in',
    gridArea: 'nav',
  },

  main: {
    animation: 'slideFromTop 0.4s ease-in',
    gridArea: 'main',
  },

  aside: {
    animation: 'slideFromRight 0.4s ease-in',
    gridArea: 'aside',
  },

  'nav li': {
    fontSize: '2rem',
    cursor: 'pointer',
    transition: '0.2s',
  },

  'nav li.active': {
    color: '$pink',
  },

  'nav li:hover': {
    color: '$pink',
  },

  'nav li + li': {
    marginTop: '3rem',
  },

  '.date-info': {
    display: 'flex',
    alignItems: 'center',
    color: '$gray-100',
    fontSize: '0.875rem',
  },

  '.date-info span': {
    fontWeight: 'bold',
    position: 'relative',
    marginLeft: '20px',
  },

  '.date-info span::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '6px',
    left: '-12.5px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '$purple',
  },

  'main h1': {
    fontSize: '3.5rem',
    marginTop: '1rem',
    lineHeight: '1',
  },

  'main p': {
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    color: '$pink',
    fontWeight: 'bold',
    opacity: '0.6',
    lineHeight: '1',
    textAlign: 'end',
    fontStyle: 'italic',
  },

  'main img': {
    marginTop: '3rem',
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    objectFit: 'cover',
  },

  '.footer-links': {
    marginTop: '1rem',
  },

  '.footer-links ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
  },

  '.footer-links ul li a': {
    color: '$gray',
    fontWeight: '600',
    lineHeight: '150%',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.2s',
    position: 'relative',
  },

  '.footer-links ul li a::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    backgroundColor: '$purple',
    bottom: '0',
    left: '0',
    transformOrigin: 'right',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s',
  },

  '.footer-links ul li a:hover': {
    color: '$purple',
  },

  '.footer-links ul li a:hover::before': {
    transformOrigin: 'left',
    transform: 'scaleX(1)',
  },

  '.aside-circle': {
    display: 'block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: '$purple',
  },

  '.aside-content': {
    maxWidth: '80%',
    margin: '0 auto',
  },

  '.aside-group': {
    marginTop: '3rem',
  },

  '.aside-group h2': {
    marginBottom: '0.5rem',
  },

  '.aside-group p': {
    lineHeight: '1.8',
    color: '$gray-500',
  },

  '.aside-content a': {
    display: 'block',
    marginTop: '5rem',
    color: '$pink',
    fontWeight: 'bold',
    fontFamily: 'Sen, sans-serif',
    textDecoration: 'underline',
    transition: '0.2s',
    paddingBottom: '1rem',
  },

  '.aside-content a:hover': {
    textDecoration: 'underline',
    color: '$purple',
  },

  '@media (max-width: 1260px)': {
    'main h1': {
      fontSize: '2.5rem',
    },
  },

  '@media (max-width: 1024px)': {
    '&': {
      display: 'grid',
      gridTemplateColumns: 'unset',
      gridTemplateAreas: `
        'nav nav'
        'main aside'
      `,
      marginTop: '1rem',
      gap: '0',
    },

    '.date-info span::before': {
      top: '5px',
    },

    'main h1': {
      fontSize: '2rem',
    },

    'main img': {
      marginTop: '1rem',
    },

    'nav ul': {
      marginBottom: '1rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
    },

    'nav li + li': {
      marginTop: 'unset',
    },

    '.footer-links ul': {
      justifyContent: 'center',
    },

    '.aside-circle': {
      display: 'none',
    },

    nav: {
      animation: 'slideFromLeft 0.4s ease-in',
      gridArea: 'nav',
    },

    main: {
      animation: 'slideFromLeft 0.4s ease-in',
      gridArea: 'main',
    },

    aside: {
      animation: 'slideFromRight 0.4s ease-in',
      gridArea: 'aside',
    },
  },

  '@media (max-width: 768px)': {
    '&': {
      display: 'grid',
      gridTemplateColumns: 'unset',
      gridTemplateAreas: `
        'nav'
        'main'
        'aside'
      `,
      marginTop: '1rem',
    },

    '.aside-content': {
      maxWidth: '100%',
      margin: '1.5rem auto 0',
    },

    '.aside-group': {
      marginTop: '1rem',
    },

    '.aside-content a': {
      marginTop: '2rem',
    },

    nav: {
      animation: 'slideFromLeft 0.4s ease-in',
      gridArea: 'nav',
    },

    main: {
      animation: 'slideFromLeft 0.4s ease-in',
      gridArea: 'main',
    },

    aside: {
      animation: 'slideFromLeft 0.4s ease-in',
      gridArea: 'aside',
    },
  },
})
