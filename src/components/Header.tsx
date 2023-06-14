import { HeaderContainer, HeaderContent } from '@/styles/components/Header'
import { useEffect } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export function Header() {
  const session = useSession()
  const router = useRouter()
  const isAuth = session && session.status === 'authenticated'
  const user = session.data?.user

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
        {isAuth ? (
          <ul>
            <p>Olá, {user?.name}</p>
            <Image
              width={50}
              height={50}
              quality={100}
              src={user?.image || ''}
              alt={'foto de perfil de ' + user?.name}
            />
            <button
              className="outlined-button"
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              Sair
            </button>
          </ul>
        ) : (
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
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault()
                login()
              }}
            >
              Entrar
            </button>
          </ul>
        )}
        {/*  <ul>
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
        </ul> */}
      </HeaderContent>
    </HeaderContainer>
  )
}
