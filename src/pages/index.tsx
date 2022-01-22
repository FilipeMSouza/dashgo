import { Flex, Button, Stack, } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/form/Input";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>SignIn | DashGo</title>
      </Head>
      <Flex
        w='100vw'
        h='100vh'
        align='center'
        justify='center'
      >
        <Flex
          as='form'
          width='100%'
          maxWidth={360}
          bg='gray.800'
          p='8' /*padding 2rem -> 32px*/
          borderRadius='8px'

          flexDir='column'
        >
          <Stack spacing='4'/* 16px -> 1rem */>

            <Input name='email' type='email' label='E-mail'></Input>
            <Input name='password' type='password' label='Password'></Input>

          </Stack>

          <Button
            mt='8' /*Margin Top 1.5rem -> 24px*/

            type='submit'
            colorScheme='pink'
          >
            Login
          </Button>
        </Flex>

      </Flex>
    </>
  )
}
