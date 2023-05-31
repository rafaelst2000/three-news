import { styled, keyframes } from '..'

const typing = keyframes({
  '40%, 60%': {
    left: 'calc(100% + 2px)',
  },
  '100%': {
    left: 0,
  },
})

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' },
})

export const HeaderContainer = styled('header', {
  boxShadow: '0 0 8px rgba(43, 43, 43, 0.1)',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 90,

  maxWidth: 1400,
  padding: '0 20px',
  margin: '0 auto',

  '.button': {
    background: '$purple',
    color: '$white',

    '&:hover': {
      filter: 'brightness(85%)',
    },
  },

  h2: {
    a: {
      color: '$purple',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      top: 0,
      position: 'relative',

      '&:hover': {
        animation: `${scaleUp} 0.2s`,
      },

      '&::after': {
        content: '',
        position: 'absolute',
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '$white',
        borderLeft: '2px solid $purple',
        animation: `${typing} 3s steps(9) infinite`,
      },
    },
  },

  ul: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '3rem',

    li: {
      a: {
        color: '$gray',
        fontWeight: '600',
        lineHeight: '150%',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.2s',
        position: 'relative',

        '&::after': {
          content: '',
          display: 'block',
          position: 'relative',
          width: '100%',
          height: 2,
          backgroundColor: '$purple',
          bottom: 0,
          left: 0,
          transformOrigin: 'right',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s',
        },

        '&:hover': {
          color: '$purple',
        },

        '&:hover::after': {
          transformOrigin: 'left',
          transform: 'scaleX(1)',
        },
      },
    },
  },

  '@media (width <= 768px)': {
    'ul li': {
      display: 'none',
    },

    'h2 a::after': {
      display: 'none',
    },
  },
})
