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
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";


type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup.string().required('Password is required').min(6, 'Too short'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Passwords must be the same'),
})




export default function CreateUser() {

  const router  = useRouter()
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users',{
      user:{
        ...user,
        created_at: new Date()
      }
    })
  },{
    onSuccess:()=>{
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const { errors } = formState


  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await createUser.mutateAsync(data)
    router.push('/users')
  }



  return (
    <>
      <Head>
        <title>DashGo. | Create New User</title>
      </Head>

      <Box>
        <Header />
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar />

          <Box
            as="form"
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={['6', '8']}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size='lg' fontWeight='normal'> Create New User</Heading>
            <Divider my='6' borderColor='gray.700' />

            <VStack spacing='8'>
              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>

                <Input
                  name='name'
                  label='Full
                  Name'
                  p='4'
                  placeholder='Jesse James T. Durden'
                  error={errors.name}
                  {...register('name')}
                />
                
                <Input
                  name='email'
                  label='E-mail'
                  type='email'
                  p='4'
                  placeholder='exemple@mail.com'
                  error={errors.email}
                  {...register('email')}
                />

              </SimpleGrid>

              <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                <Input
                  name='password'
                  label='Password'
                  type='password'

                  p='4'
                  placeholder='********'
                  error={errors.password}
                  {...register('password')}
                />

                <Input
                  name='password_confirmation'
                  label='Password Comfirmation'
                  type='password'

                  p='4'
                  placeholder='********'
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                />

              </SimpleGrid>
            </VStack>
            <Flex mt='8' justify='end'>
              <HStack spacing='4'>
                <Link href="/users" passHref>
                  <Button as='a' colorScheme='whiteAlpha' >Cancel</Button>
                </Link>
                <Button
                  colorScheme='pink'
                  type='submit'
                  isLoading={formState.isSubmitting}
                >
                  Submit
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}