import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='regular'
      letterSpacing='tight'
      w='64'/* 256px*/
    >
      DashGo
      <Text as='span' ml='1' color='pink.500'>.</Text>
    </Text>
  )
}