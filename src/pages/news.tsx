import { NewsContainer } from '@/styles/pages/news'
import { getServerSession } from 'next-auth/next'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import MainContent from '@/components/News/MainContent'
import NewsData from '@/components/News/NewsData'
import VerticalMenu from '@/components/News/VerticalMenu'

export default function News() {
  return (
    <NewsContainer className="container">
      <VerticalMenu />
      <MainContent />
      <NewsData />
    </NewsContainer>
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

  return {
    props: {
      session,
    },
  }
}
