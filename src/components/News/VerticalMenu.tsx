import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'

interface VerticalMenuProps {
  selectedArticle: number
  setSelectedArticle: (value: number) => void
}

export default function VerticalMenu({
  selectedArticle,
  setSelectedArticle,
}: VerticalMenuProps) {
  const router = useRouter()
  const links = ['01', '02', '03']
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
