import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '500px 1fr',
  height: 'calc(100vh - 290px)',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  h1: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    lineHeight: '110%',
    marginBottom: '1rem',
  },

  p: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '180%',
    marginBottom: '2rem',
  },

  '.button': {
    background: '$pink',
    color: '$white',

    '&:hover': {
      filter: 'brightness(85%)',
    },
  },

  '.img-container': {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  img: {
    maxWidth: '100%',
    display: 'block',
  },

  '@media (1025px <= width <= 1260px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media (width <= 1024px)': {
    gridTemplateColumns: '1fr',
    gap: 0,
    maxWidth: '600px',
    textAlign: 'center',
    marginTop: '2rem',

    'img.container': {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    img: {
      maxWidth: '80%',
    },
  },

  '@media (width <= 768px)': {
    h1: {
      fontSize: '2.5rem',
    },
  },
})
