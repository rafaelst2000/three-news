import { BlogContainer } from '@/styles/pages/blog'
import { getServerSession } from 'next-auth/next'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import TitleSection from '@/components/Blog/TitleSection'
import TopTrends from '@/components/Blog/TopTrends'
import { api } from './api/axios'

export interface Article {
  author?: string
  content?: string
  description?: string
  publishedAt?: string
  title?: string
  url?: string
  urlToImage?: string
  source: {
    id?: string
    name?: string
  }
}

interface BlogProps {
  articles: Article[]
}

export default function Blog({ articles }: BlogProps) {
  return (
    <BlogContainer>
      <TitleSection />
      <TopTrends articles={articles} />
    </BlogContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const response = await api.get(
    `/top-headlines?country=us&pageSize=3&apiKey=${process.env.API_KEY}`,
  )

  return {
    props: {
      articles: response.data.articles,
      session,
    },
  }
}
