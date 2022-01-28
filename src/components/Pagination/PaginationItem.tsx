import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrentPage?: boolean
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  isCurrentPage = false, 
  number,
  onPageChange
 }: PaginationItemProps) {
  
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
      onClick={()=> onPageChange(number)}
    >
      {number}
    </Button>
  )
}