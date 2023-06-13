import { useState } from 'react'
import { NewsContainer } from '@/styles/pages/news'
import { getServerSession } from 'next-auth/next'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import MainContent from '@/components/News/MainContent'
import NewsData from '@/components/News/NewsData'
import VerticalMenu from '@/components/News/VerticalMenu'

import { api } from './api/axios'
import { Article } from './blog'

interface NewsProps {
  articles: Article[]
}

export default function News({ articles }: NewsProps) {
  const [selectedArticle, setSelectedArticle] = useState(0)

  const threeArticles = [articles[0], articles[1], articles[2]]
  const article = threeArticles[selectedArticle]

  return (
    <NewsContainer className="container">
      <VerticalMenu
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
      <MainContent article={article} />
      <NewsData article={article} />
    </NewsContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const { query } = context

  if (!session || !query) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const searchTerm = query.q
  const response = await api.get(
    `/everything?q=${searchTerm}&language=pt&apiKey=${process.env.API_KEY}`,
  )

  return {
    props: {
      articles: response.data.articles,
      session,
    },
  }
}
