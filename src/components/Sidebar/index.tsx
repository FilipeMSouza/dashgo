import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";

export default function Sidebar() {

  const { isOpen, onClose} = useSidebarDrawer()

  const isFloatingSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isFloatingSidebar) {
    return(
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p='4'>
          <DrawerCloseButton mt='6' />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8' >
      <SidebarNav />
    </Box>
  );
}