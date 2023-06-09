import { HomeContainer } from '@/styles/pages/home'
import homeImage from '@/assets/homeImage.svg'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  console.log(session)

  return (
    <>
      <HomeContainer className="container">
        <div className="main-content">
          <h1>Seu repositório de notícias diárias</h1>
          <p>
            Aqui você encontra diferentes notícias, de diversas áreas, para
            começar o dia sempre bem informado :)
          </p>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault()
              signIn('google')
            }}
          >
            Começar a ler agora
          </button>
        </div>
        <div className="img-container">
          <Image
            src={homeImage}
            alt="Person using computer"
            width={594}
            height={472}
            quality={85}
          />
        </div>
      </HomeContainer>
    </>
  )
}
