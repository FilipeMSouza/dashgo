import {
  Flex,
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkPrps,
  Text
} from "@chakra-ui/react";

import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkPrps {
  icon: ElementType;
  children: String;
  link: string;
}

export function NavLink({ children, icon,link, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={link} passHref>
      <ChakraLink display='flex' align='center'{...rest}>
        <Icon as={icon} fontSize='18' />
        <Text ml='4' fontWeight='medium' fontSize='small'>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}