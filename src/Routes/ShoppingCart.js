import react from 'react';
import CartFruits from '../Components/CartFruits';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Heading,
  HStack,
} from '@chakra-ui/react';

export default function ShoppingCart() {
  return (
    <ChakraProvider>
      <header>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px">
          <HStack spacing="75%">
            <Heading>Mercadin</Heading>
            <Link to="/">
              <Button margin="25px" w="110px">
                <Text>Home 🏠</Text>
              </Button>
            </Link>
          </HStack>
        </Box>
      </header>
      <body>
        <HStack spacing="30px" margin="50px">
          <CartFruits
            image="https://baggiosupermercados.net.br/images/fb5efb5e-ab15-4256-a24e-2ac48db3fdf4.png"
            name="Abacate"
            priceTag="R$5,00/un"
            price={5}
            amount={0}
          ></CartFruits>
          <CartFruits
            image="https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png"
            name="Banana"
            priceTag="R$6,00/kg"
            price={6}
            amount={0}
          ></CartFruits>
          <CartFruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Laranja-PNG.png"
            name="Laranja"
            priceTag="R$5,50/kg"
            price={5.5}
            amount={0}
          ></CartFruits>
          <CartFruits
            image="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Foto-Apple-Ma%C3%A7a-PNG.png"
            name="Maçã"
            priceTag="R$3,00/kg"
            price={3}
            amount={0}
          ></CartFruits>
          <CartFruits
            image="https://www.pngkit.com/png/full/205-2054773_manga-imagens-de-manga-png.png"
            name="Manga"
            priceTag="R$6,00/un"
            price={6}
            amount={0}
          ></CartFruits>
        </HStack>
      </body>
      <footer>
        <Box bg="#FF2E00" w="100%" h="100px" padding="30px" marginTop="77px">
          <HStack spacing="75%">
            <Text>Mercadin inc, todos os direitos reservados</Text>
          </HStack>
        </Box>
      </footer>
    </ChakraProvider>
  );
}
