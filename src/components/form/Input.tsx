import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;

}


export function Input({name, label, ...rest}: InputProps ){
  return(
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      id={name}
      name={name}
      focusBorderColor='pink.500'
      bg='gray.900'
      variant='flushed'
      borderRadius='4px'
      siza ='lg'
      {...rest}
    />
  </FormControl>
  );
}