import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react';
import { login } from './services/login';

function App() {
  return (
    <>
      <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça o Login</h1>
            </Center>
            <Input placeholder='email'/>
            <Input placeholder='password'/>
            <Center>
              <Button onClick={login} size='sm' colorScheme='teal' marginTop='15px' width='100%'>
                Enviar
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
