import { Box, Text, Heading, Image, HStack, Button } from '@chakra-ui/react';
import numToBlr from '../Utils/numToBlr';

export default function CartFruits(props) {
  const { image, name, price, id } = props;
  const amount = localStorage.getItem(id);
  const handleClick = fruit => {
    localStorage.setItem(fruit, 0);
  };

  return (
    <Box w="200px" h="300px" bg="#423E3B" padding="10px">
      <Heading padding="10px" color="whiteAlpha.900">
        {name}
      </Heading>
      <Image
        src={image}
        maxHeight="120px"
        maxWidth="150px"
        margin="20px"
      ></Image>
      <HStack>
        <Text color="whiteAlpha.900">
          {numToBlr(price)} X {amount} = {numToBlr(price * amount)}
        </Text>
        <Button onClick={() => handleClick(id, 0)}>❌</Button>
      </HStack>
    </Box>
  );
}
