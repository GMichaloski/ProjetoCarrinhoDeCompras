import react from 'react';
import Fruits from '../Components/Fruits';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Button,
  Heading,
  HStack,
} from '@chakra-ui/react';
export default function HomePage() {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px">
          <HStack spacing="75%">
            <Heading>Mercadin</Heading>
            <Link to="/cart">
              <Button margin="25px" w="110px" href="/shopping-cart">
                <Text>Carrinho 🛒</Text>
              </Button>
            </Link>
          </HStack>
        </Box>
      </header>
      <body>
        <HStack spacing="30px" margin="50px">
          <Fruits
            image="https://baggiosupermercados.net.br/images/fb5efb5e-ab15-4256-a24e-2ac48db3fdf4.png"
            name="Abacate"
            price={5}
            id={0}
          ></Fruits>
          <Fruits
            image="https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png"
            name="Banana"
            price={6}
            step={0.1}
            id={1}
          ></Fruits>
          <Fruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Laranja-PNG.png"
            name="Laranja"
            price={5.5}
            step={0.1}
            id={2}
          ></Fruits>
          <Fruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Foto-Apple-Ma%C3%A7a-PNG.png"
            name="Maçã"
            price={3}
            step={0.1}
            id={3}
          ></Fruits>
          <Fruits
            image="https://www.pngkit.com/png/full/205-2054773_manga-imagens-de-manga-png.png"
            name="Manga"
            price={6}
            id={4}
          ></Fruits>
        </HStack>
      </body>
      <footer>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px" marginTop="77px">
          <HStack spacing="33%">
            <Text>
              "Tá torto mas foi feito com o coração" - Criador do Mercadin
            </Text>
          </HStack>
        </Box>
      </footer>
    </ChakraProvider>
  );
}
