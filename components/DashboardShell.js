import React from 'react'
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button
} from '@chakra-ui/react'
import { Logo } from '@/styles/icons'
import { useAuth } from '@/lib/auth'
import AddSiteModal from './AddSiteModal'

const DashboardShell = ({children}) => {
    const auth = useAuth()

    return (
        <Flex flexDirection="column">
        <Flex
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="whiteAlpha.900"
            py={2}
            px={8}
        >
            <Stack spacing={4} isInline justifyContent="center" alignItems="center">
            <Logo  w={9} h={9} color="black" mr={8} onClick={() => window.location.href = '/'}  _hover={{ cursor: 'pointer' }}/>
            <Link>Sites</Link>
            <Link>Feedback</Link>
            </Stack>
            <Flex justifyContent="center" alignItems="center">
            {
                auth?.user &&
                    <Button size="sm" mr={6} variant="ghost" onClick={() => auth.signout()}>Sign Out</Button>
            }
            <Avatar size="sm" src={auth?.user?.photoUrl}/>
            </Flex>
        </Flex>
        <Flex
            backgroundColor="gray.100"
            p={10}
            height="100vh"
            width="100%"
        >
            <Flex maxWidth="800px" ml="auto" mr="auto" w="100%" flexDirection="column">
                <Breadcrumb>
                    <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color="grey.700">Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex justifyContent="space-between" alignItems="center" mb='4'>
                    <Heading color="black">My Sites</Heading>
                    <AddSiteModal>+ Add Site</AddSiteModal>
                </Flex>
                {children}
            </Flex>
        </Flex>
        </Flex>
    )
}

export default DashboardShell