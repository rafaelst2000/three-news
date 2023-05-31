import { HomeContainer } from '@/styles/pages/home'
import homeImage from '@/assets/homeImage.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeContainer className="container">
        <div className="main-content">
          <h1>Seu repositório de notícias diárias</h1>
          <p>
            Aqui você encontra diferentes notícias, de diversas áreas, para
            começar o dia sempre bem informado :)
          </p>
          <a href="news.html" className="button">
            Começar a ler agora
          </a>
        </div>
        <div className="img-container">
          <Image src={homeImage} alt="Person using computer" />
        </div>
      </HomeContainer>
    </>
  )
}
