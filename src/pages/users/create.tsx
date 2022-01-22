import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import Head from "next/Head";
import { Input } from "../../components/form/Input";

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";


export default function CreateUser() {
  return (
    <>
      <Head>
        <title>DashGo. | Create New User</title>
      </Head>

      <Box>
        <Header />
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar />

          <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
            <Heading size='lg' fontWeight='normal'> Create New User</Heading>
            <Divider my='6' borderColor='gray.700'/>
            
            <VStack spacing='8'>
              <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                <Input name='name' label='Full Name' p='4' placeholder='Jesse James T. Durden'/>
                <Input name='email' label='E-mail' p='4' type='email' placeholder='exemple@mail.com'/>
              </SimpleGrid>
              <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                <Input
                  name='password'
                  type='password'
                  label='Password'
                  p='4'
                  placeholder='********' />
               <Input
                  name='comfirm_password'
                  label='Password Comfirmation'
                  p='4'
                  type='Password'
                  placeholder='********' />
              </SimpleGrid>
            </VStack>

            <Flex mt='8' justify='end'>
              <HStack spacing='4'>
                <Button colorScheme='whiteAlpha'>Cancel</Button>
                <Button colorScheme='pink'>Submit</Button>

              </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    </>
  );
}