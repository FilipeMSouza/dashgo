import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'


import { theme } from '../styles/theme'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'


if (process.env.NODE_ENV === 'development') {
  makeServer()
}



function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          
            <Component {...pageProps} />
          
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
