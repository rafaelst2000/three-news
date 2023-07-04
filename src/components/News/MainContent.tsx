import { formatDate } from '@/helpers/formatDate'
import { Article } from '@/pages/blog'
import Image from 'next/image'

interface MainContentProps {
  article: Article
}

export default function MainContent({ article }: MainContentProps) {
  return (
    <main>
      <div className="date-info">
        <b>{formatDate(article.publishedAt)}</b>
        <span>Three News</span>
      </div>
      <h1>{article.title}</h1>
      <p>By: {article.author}</p>
      <Image
        src={article.urlToImage}
        alt="news image logo"
        width={630}
        height={300}
        quality={85}
      />
      <footer className="footer-links">
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </footer>
    </main>
  )
}
