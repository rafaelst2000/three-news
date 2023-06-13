import { Article } from '@/pages/blog'
import TopTrend from './TopTrend'

interface TopTrendsProps {
  articles: Article[]
}

export default function TopTrends({ articles }: TopTrendsProps) {
  return (
    <div className="top-trends">
      <div className="container">
        <h2>Melhores manchetes</h2>
      </div>
      {articles.map((article, index) => (
        <TopTrend article={article} key={index} second={index === 1} />
      ))}
    </div>
  )
}
