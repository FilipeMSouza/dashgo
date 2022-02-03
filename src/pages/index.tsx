import { Flex, Button, Stack, } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup' 
import { useContext } from "react";
import Head from "next/head";
import * as yup from 'yup';

import { Input } from "../components/Form/Input";


type SingInFormData={
  email: string,
  password: string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup.string().required('Password is required')
})


export default function SignIn() {

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn:SubmitHandler <SingInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    const login={
      email: data.email,
      password: data.password,
    }
    console.log(login)
    
  }

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing='4'/* 16px -> 1rem */>

            <Input 
              name='email'  
              label='E-mail'
              error = {errors.email}
              {...register('email')}
            />
            <Input 
              name='password'  
              type='password' 
              label='Password'
              error = {errors.password}
              {...register('password')}
            />

          </Stack>

          <Button
            mt='8' /*Margin Top 1.5rem -> 24px*/
            type='submit'
            colorScheme='pink'
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Flex>

      </Flex>
    </>
  )
}
