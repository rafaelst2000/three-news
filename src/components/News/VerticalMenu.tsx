interface VerticalMenuProps {
  selectedArticle: number
  setSelectedArticle: (value: number) => void
}

export default function VerticalMenu({
  selectedArticle,
  setSelectedArticle,
}: VerticalMenuProps) {
  const links = ['01', '02', '03']
  const isActive = (value: number) => value === selectedArticle

  return (
    <nav>
      <ul>
        <li>Voltar</li>
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
