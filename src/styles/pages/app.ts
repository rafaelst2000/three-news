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

export const Button = styled('button', {})
