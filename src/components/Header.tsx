import { HeaderContainer, HeaderContent } from '@/styles/components/Header'
import { signIn, useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  const session = useSession()
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
        <h2 onClick={() => router.push('/')}>
          <a href="#">Three news</a>
        </h2>
        {isAuth ? (
          <ul>
            <p>Hello, {user?.name}</p>
            <Image
              width={50}
              height={50}
              quality={100}
              src={user?.image || ''}
              alt={user?.name + 'profile image'}
            />
            <button
              className="outlined-button"
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              Logout
            </button>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="#">News updates</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault()
                login()
              }}
            >
              Login
            </button>
          </ul>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}
