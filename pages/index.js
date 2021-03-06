import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button, Code, Flex, Heading, Text } from '@chakra-ui/react'
import { Logo } from '@/styles/icons'

const Home = () => {
  const auth = useAuth()

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <script dangerouslySetInnerHTML={{ 
          __html: `
              if (document.cookie && document.cookie.includes('feedme-fast-auth')) {
                window.location.href = "/dashboard"
              }
            ` 
          }} 
        />
      </Head>
      <Logo  w={14} h={14} color="black"/>
      {
        auth?.user ? (
          <Button size="sm" mt={4} onClick={() => window.location.href = '/dashboard'}>Dashboard</Button>
        ) : (
          <Button size="sm" mt={4} onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )
      }
    </Flex>
  )
}

export default Home
