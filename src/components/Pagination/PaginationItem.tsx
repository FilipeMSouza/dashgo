import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrentPage?: boolean
}

export function PaginationItem({ 
  isCurrentPage = false, 
  number }: PaginationItemProps) {
  
    return isCurrentPage ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme='pink'
      disabled
      _disabled={{
        bgColor: 'pink.500',
        cursor: 'default'
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg='gray.700'
      _hover={{
        bgColor: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}