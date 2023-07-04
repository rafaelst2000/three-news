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
          <h2>Summary</h2>
          <p>{article?.description}</p>
        </div>
        <div className="aside-group">
          <h2>Source</h2>
          <p>{article.source?.name || article.source?.id}</p>
        </div>
        <a href={article?.url} target="_blank">
          Read the complete article here
        </a>
      </div>
    </aside>
  )
}
