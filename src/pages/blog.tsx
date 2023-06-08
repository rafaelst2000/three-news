import { BlogContainer } from '@/styles/pages/blog'
import TitleSection from '@/components/Blog/TitleSection'
import TopTrends from '@/components/Blog/TopTrends'

export default function Blog() {
  return (
    <BlogContainer>
      <TitleSection />
      <TopTrends />
    </BlogContainer>
  )
}
