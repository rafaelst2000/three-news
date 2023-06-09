import { HeaderContainer, HeaderContent } from '@/styles/components/Header'

export function Header() {
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
          <button className="button">Entrar</button>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  )
}
