import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'

interface VerticalMenuProps {
  selectedArticle: number
  setSelectedArticle: (value: number) => void
  articlesLength: number
}

export default function VerticalMenu({
  selectedArticle,
  setSelectedArticle,
  articlesLength,
}: VerticalMenuProps) {
  const router = useRouter()
  const links = []
  for (let i = 1; i <= articlesLength; i++) {
    const number = i.toString().padStart(2, '0')
    links.push(number)
  }

  const isActive = (value: number) => value === selectedArticle

  return (
    <nav>
      <ul>
        <li className="go-back" onClick={() => router.push('/blog')}>
          <CaretLeft weight="bold" />
          Go back
        </li>
        {links.map((link, index) => (
          <li
            key={link}
            className={isActive(index) ? 'active' : ''}
            onClick={() => setSelectedArticle(index)}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}
