import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8' >
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'  >GENERAL</Text>
          <Stack spacing='6' align='stretch' mt='8'>

            <Link display='flex' align='center'>
              <Icon as={RiDashboardLine} fontSize='18'/>
              <Text ml='4' fontWeight='medium' fontSize='small'>Dasboard</Text>
            </Link>

            <Link display='flex' align='center'>
              <Icon as={RiContactsLine} fontSize='18'/>
              <Text ml='4' fontWeight='medium' fontSize='small'>Users</Text>
            </Link>
           
          </Stack>
        </Box>

        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>AUTOMATION</Text>
          <Stack spacing='6' align='stretch' mt='8'>
            <Link display='flex' align='center'>
              <Icon as={RiInputMethodLine} fontSize='18'/>
              <Text ml='4' fontWeight='medium' fontSize='small'>Forms</Text>
            </Link>

            <Link display='flex' align='center'>
              <Icon as={RiGitMergeLine} fontSize='18'/>
              <Text ml='4' fontWeight='medium' fontSize='small'>Automation</Text>
            </Link>
           
          </Stack>
        </Box>

      </Stack>
    </Box>
  );
}