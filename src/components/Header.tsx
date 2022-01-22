import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";

import { RiNotificationLine, RiSearchLine, RiUserAddLine, RiUserLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'/*80px*/
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text
        fontSize='3xl'
        fontWeight='regular'
        letterSpacing='tight'
        w='64'/* 256px*/
      >
        DashGo
        <Text as='span' ml='1' color='pink.500'>.</Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        maxWidth={400}
        alignSelf='center'
        color='gray.20'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color="grey.500"
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Search'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon
          as={RiSearchLine}
          fontSize='20'
        />

      </Flex>

      <Flex
        align='center'
        ml='auto'
      >
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
        <Flex>
          <Box mr='4' textAlign='right'>
            <Text fontSize='18'>Filipe Souza</Text>
            <Text fontSize='small' color='gray.600'>
              filipe.souza1906@gmail.com
            </Text>
          </Box>
          <Avatar size='md'name='Filipe Souza' src='https://github.com/FilipeMSouza.png'/>
        </Flex>
      </Flex>

    </Flex>
  );
}