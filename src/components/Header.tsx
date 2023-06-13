import { HeaderContainer, HeaderContent } from '@/styles/components/Header'
import { useEffect } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export function Header() {
  const session = useSession()
  const router = useRouter()
  const isAuth = session && session.status === 'authenticated'

  /*   useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      if (isAuth) {
        const user = session.data.user
      } else {
        logout()
      }
    }
  }, [session, router, isAuth, login]) */

  async function login() {
    await signIn('google')
  }

  function logout() {
    window.localStorage.removeItem('@three-news-user')
    if (isAuth) {
      signOut({ callbackUrl: '/' })
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>
          <a href="index.html">Three news</a>
        </h2>
        <ul>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          {isAuth ? (
            <button
              className="outlined-button"
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              Sair
            </button>
          ) : (
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault()
                login()
              }}
            >
              Entrar
            </button>
          )}
        </ul>
      </HeaderContent>
    </HeaderContainer>
  )
}
