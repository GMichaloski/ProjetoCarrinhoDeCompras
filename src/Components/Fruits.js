import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  NumberInput,
  Text,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import react from 'react';
import numToBlr from '../Utils/numToBlr';
import { shoppingCart } from '../App';
export default function Fruits(props) {
  const { image, name, price, step, id } = props;
  const { amount, setAmount } = react.useState('');
  const handleChange = event => setAmount(event.target.value);
  return (
    <Box w="200px" h="300px" bg="#423E3B" padding="10px">
      <Image
        src={image}
        maxHeight="120px"
        maxWidth="150px"
        margin="20px"
      ></Image>
      <Heading padding="4px" color="whiteAlpha.900">
        {name}
      </Heading>
      <Text color="whiteAlpha.900">{numToBlr(price)}</Text>
      <HStack>
        <Button onClick={shoppingCart.incrementValue(id, amount)}>🛒</Button>
        <NumberInput
          color={'whiteAlpha.900'}
          defaultValue={1}
          min={0.5}
          max={3}
          step={step}
          value={amount}
          onChange={handleChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </Box>
  );
}
