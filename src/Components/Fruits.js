import { Box, Button, Heading, Image } from '@chakra-ui/react';

export default function Fruits(props) {
  const { image, name, price } = props;

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
      <Button marginLeft="24%">{price}</Button>
    </Box>
  );
}
