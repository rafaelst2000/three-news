import { useState } from 'react'
import { NewsContainer, NotFoundContainer } from '@/styles/pages/news'
import { getServerSession } from 'next-auth/next'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import MainContent from '@/components/News/MainContent'
import NewsData from '@/components/News/NewsData'
import VerticalMenu from '@/components/News/VerticalMenu'

import { api } from './api/axios'
import { Article } from './blog'
import { useRouter } from 'next/router'

interface NewsProps {
  articles: Article[]
}

export default function News({ articles }: NewsProps) {
  const [selectedArticle, setSelectedArticle] = useState(0)
  const router = useRouter()

  const isEmpty = articles.length === 0
  const article = articles[selectedArticle]

  return !isEmpty ? (
    <NewsContainer className="container">
      <VerticalMenu
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
      <MainContent article={article} />
      <NewsData article={article} />
    </NewsContainer>
  ) : (
    <NotFoundContainer className="container">
      <h1>Oops!</h1>
      <h2>Articles not found</h2>
      <p>
        It seems that we couldnt find any articles related to that term. <br />
        Please try searching for a new topic.
      </p>
      <button className="button" onClick={() => router.push('/blog')}>
        Return to blog
      </button>
    </NotFoundContainer>
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
    `/everything?q=${searchTerm}&pageSize=3&apiKey=${process.env.API_KEY}`,
  )

  return {
    props: {
      articles: response.data.articles || [],
      session,
    },
  }
}
