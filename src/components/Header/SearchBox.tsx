import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef  } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
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
      ref = {searchInputRef}
      
    />
    <Icon
      as={RiSearchLine}
      fontSize='20'
    />

  </Flex>)
}