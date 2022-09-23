import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { Stack, Box } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";


export function SidebarNav(){
  return(
    <Stack spacing='12' align='flex-start'>
    <Box>
      <NavSection title='GENERAL'>
        <NavLink icon={RiDashboardLine} children='dashboard' link='/dashboard'/>
        <NavLink icon={RiContactsLine} children='Users' link='/users'/>
      </NavSection>
    </Box>

    <Box>
      <NavSection title='AUTOMATION'>

        <NavLink icon={RiInputMethodLine} children='Forms' link='/forms'/>
        <NavLink icon={RiGitMergeLine} children='Automation' link='/automation'/>

      </NavSection>
    </Box>

  </Stack>

  )
}