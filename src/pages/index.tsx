import { HomeContainer } from '@/styles/pages/home'
import { signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import homeImage from '@/assets/homeImage.svg'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

export default function Home() {
  return (
    <>
      <HomeContainer className="container">
        <div className="main-content">
          <h1>Your daily news repository</h1>
          <p>
            Here you can find different news from various fields to start your
            day well-informed :)
          </p>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault()
              signIn('google')
            }}
          >
            Start reading now
          </button>
        </div>
        <div className="img-container">
          <Image
            src={homeImage}
            alt="Person using computer"
            width={594}
            height={472}
            quality={85}
          />
        </div>
      </HomeContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return {
      props: {
        session,
      },
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
