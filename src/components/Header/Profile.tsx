import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text fontSize='18'>Filipe Souza</Text>
          <Text fontSize='small' color='gray.600'>
            filipe.souza1906@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size='md' name='Filipe Souza' src='https://github.com/FilipeMSouza.png' />
    </Flex>
  )
}