import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import Head from "next/Head";
import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { useState } from "react";
import { GetServerSideProps } from "next";

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import getUsers from "../../services/hooks/useUsers"



export default function UserList({user}) {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching ,error } = useUsers(page, {
    initialData: user
  })

  console.log(page)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId],async () => {
         const response = await api.get(`users/${userId}`)
         return response.data
    },{
      staleTime: 1000 * 60 * 10 // 10 minutes   
    })
  }

  return (
    <>
      <Head>
        <title>DashGo. | User List</title>
      </Head>
      <Box>
        <Header />
        <Flex
          w='100%'
          my='6'
          maxWidth={1480}
          mx='auto' px='6'
        >

          <Sidebar />

          <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
            <Flex mb='8' justify='space-between' align='center'>

              <Heading size='lg' fontWeight='normal'>
                User List
                {!isLoading && isFetching &&<Spinner size='sm' color='gray.500' ml='4'/> }
              </Heading>
              <NextLink href="/users/create" passHref>
                <Button
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='pink'
                  leftIcon={<Icon as={RiAddLine} fontSize='20' />}

                >
                  Create New User
                </Button>
              </NextLink>
            </Flex>

            {isLoading ? (
              <Flex justify='center'>
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify='center'>
                <Text>
                  Failure to load users data
                </Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme='whiteAlpha'>
                  <Thead>
                    <Tr>

                      <Th px={['4', '4', '6']} color='gray.300' width='8'>
                        <Checkbox colorScheme='pink' />
                      </Th>
                      <Th> Users </Th>
                      {isWideVersion && <Th>Created At </Th>}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map(users => {
                      return (
                        <Tr key={users.id} >
                          <Td px='6'>
                            <Checkbox colorScheme='pink' />
                          </Td>
                          <Td>
                            <Box>
                              <Link color='purple.400' onMouseEnter={() =>handePrefetchUser(users.id)}>
                                <Text fontWeight='bold'>{users.name}</Text>
                              </Link>
                              <Text fontSize='small' color='gray.300'>
                              {users.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td> {users.createdAt}</Td>}
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
                <Pagination 
                   totalCountOfRegisters = {data.totalCount}
                   currentPage = {page}
                   onPageChanged = {setPage}
                />
              </>
            )}

          </Box>
        </Flex>
      </Box>
    </>
  );
}


export const gerServerSideProps: GetServerSideProps = async()=> {

  const {users, totalCount} = await getUsers(1);

  return {
    props:{
      users
    }
  }
}


