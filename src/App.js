import React from 'react';
import Fruits from './Components/Fruits';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Heading,
  HStack,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px">
          <HStack spacing="75%">
            <Heading>Mercadin</Heading>
            <Button margin="25px" w="110px">
              <p>Carrinho 🛒</p>
            </Button>
          </HStack>
        </Box>
      </header>
      <body>
        <HStack spacing="30px" margin="50px">
          <Fruits
            image="https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png"
            name="Banana"
            price="R$6,00/kg"
          ></Fruits>
          <Fruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Foto-Apple-Ma%C3%A7a-PNG.png"
            name="Maçã"
            price="R$3,00/kg"
          ></Fruits>
          <Fruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Laranja-PNG.png"
            name="Laranja"
            price="R$5,50/kg"
          ></Fruits>
          <Fruits
            image="https://baggiosupermercados.net.br/images/fb5efb5e-ab15-4256-a24e-2ac48db3fdf4.png"
            name="Abacate"
            price="R$5,00/un"
          ></Fruits>
          <Fruits
            image="https://www.pngkit.com/png/full/205-2054773_manga-imagens-de-manga-png.png"
            name="Manga"
            price="R$6,00/un"
          ></Fruits>
        </HStack>
      </body>
      <footer>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px" marginTop="77px">
          <HStack spacing="75%">
            <p>Mercadin inc, todos os direitos reservados</p>
          </HStack>
        </Box>
      </footer>
    </ChakraProvider>
  );
}

export default App;
