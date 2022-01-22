import { Box, Flex, grid, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';
import Head from "next/head";
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})


const options: ApexOptions = {
  chart: {
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500],
  },
  grid: {
      show: false,
  },
  dataLabels:{
      enabled: false,
  },
  tooltip: {
      enabled: false,
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: theme.colors.gray[600]
      },
      axisTicks: {
          color: theme.colors.gray[600]
      },
      categories: [
          '2022-01-21T00:00:00.000Z',
          '2022-01-22T00:00:00.000Z',
          '2022-01-23T00:00:00.000Z',
          '2022-01-24T00:00:00.000Z',
          '2022-01-25T00:00:00.000Z',
          '2022-01-26T00:00:00.000Z',
          '2022-01-27T00:00:00.000Z',
      ],
  },
  colors:['#D94194'],
  fill:{
    colors: ['#D94194'],
    opacity: 0.50,
    type: 'gradient',
    gradient: {
      shade:'dark',
      opacityFrom: 0.7,
      opacityTo: 0.2,

    }
  }
}
const series = [
  { name: 'series1', data: [31, 120 ,10, 28, 61, 189, 109] }
]


export default function Dasboard() {
  return (
    <>
    <Head>
      <title>DashGo. | Dasboard</title>
    </Head>
    <Flex direction="column" h='100vh'>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
      >

        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4' > Weekly Subscription</Text>

            <Chart
              options={options}
              series={series}
              type='area'
              height={160} />

          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4' > Visualization </Text>
            <Chart
              options={options}
              series={series}
              type='area'
              height={160} />
          </Box>

        </SimpleGrid>

      </Flex>
    </Flex>
    </>
  );
}