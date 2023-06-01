import MainContent from '@/components/News/MainContent'
import NewsData from '@/components/News/NewsData'
import VerticalMenu from '@/components/News/VerticalMenu'
import { NewsContainer } from '@/styles/pages/news'

export default function News() {
  return (
    <NewsContainer className="container">
      <VerticalMenu />
      <MainContent />
      <NewsData />
    </NewsContainer>
  )
}
