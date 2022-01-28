import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChanged: (page: number) => void;

}
const siblingsCount = 1 // how many pages will appears on both sides of current page

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}


export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChanged
}: PaginationProps) {
  let lastPage //Maximum number of pages
  Math.floor(totalCountOfRegisters % registersPerPage) >= 1?
    lastPage = Math.floor((totalCountOfRegisters/registersPerPage) + 1)
    :lastPage = Math.floor(totalCountOfRegisters/registersPerPage);
  
  
  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >

      <Box>
        <strong> 0 </strong> - <strong> 10 </strong> of <strong> {totalCountOfRegisters} </strong>
      </Box>
      <Stack direction='row' spacing='2'>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChanged} number={1} />
            {currentPage > (2 + siblingsCount) && 
            <Text 
              color='gray.300'
              w = '8'
              textAlign='center'
            >...</Text>}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem onPageChange={onPageChanged} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChanged} number={currentPage} isCurrentPage />

        {nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem onPageChange={onPageChanged} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && 
            <Text 
              color='gray.300'
              w = '8'
              textAlign='center'
            >...</Text>}
            <PaginationItem onPageChange={onPageChanged} number={lastPage} />
          </>
        )}

      </Stack>

    </Stack>
  )
}