import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  '@media(max-width: 768px)': {
    minHeight: '100%',
    padding: '0 1.125rem',
  },
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    marginLeft: 'auto',
  },
})

export const Button = styled('button', {})
