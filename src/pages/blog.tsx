import { BlogContainer } from '@/styles/pages/blog'
import { getServerSession } from 'next-auth/next'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

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
