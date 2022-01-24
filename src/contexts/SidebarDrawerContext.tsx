import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface SidebarDrawerProviderProps{
  children:ReactNode
}


type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
  
  const discLosure =useDisclosure()
  const router = useRouter()

  useEffect(()=> {
    discLosure.onClose()
  },[router.asPath])
  
  return(
    <SidebarDrawerContext.Provider value={discLosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)