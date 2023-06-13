import { Article } from '@/pages/blog'

interface NewsDataProps {
  article: Article
}

export default function NewsData({ article }: NewsDataProps) {
  return (
    <aside>
      <div className="aside-content">
        <div className="aside-circle"></div>
        <div className="aside-group">
          <h2>Resumo</h2>
          <p>{article.description}</p>
        </div>
        <div className="aside-group">
          <h2>Fonte</h2>
          <p>{article.source?.name || article.source?.id}</p>
        </div>
        <a href={article.url} target="_blank">
          Leia a reportagem completa aqui
        </a>
      </div>
    </aside>
  )
}
