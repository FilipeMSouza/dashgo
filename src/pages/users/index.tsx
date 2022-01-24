import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
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

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import Link from "next/link";




export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
              </Heading>
              <Link href="/users/create" passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                
              >
                Create New User
              </Button>
              </Link>
            </Flex>

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
                <Tr>
                  <Td px='6'>
                    <Checkbox colorScheme='pink' />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Filipe Souza</Text >
                      <Text fontSize='small' color='gray.300'>
                        filipe.souza1906@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td> 21de janeiro, 2022</Td>}
                </Tr>
              </Tbody>
            </Table>
            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}