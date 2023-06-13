import { Article } from '@/pages/blog'

export interface TopTrendProps {
  second?: boolean
  article: Article
}

export default function TopTrend({ second = false, article }: TopTrendProps) {
  return (
    <div className={second ? 'top-trend second' : 'top-trend'}>
      <div className="container">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank">
          Leia na integra
        </a>
      </div>
    </div>
  )
}
