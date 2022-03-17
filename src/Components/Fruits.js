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
import { useState } from 'react/cjs/react.development';
import numToBlr from '../Utils/numToBlr';
export default function Fruits(props) {
  const { image, name, price, step, id } = props;
  const [amount, setAmount] = useState(0);

  const handleChange = event => {
    setAmount(event);
  };
  const handleClick = (fruit, value) => {
    localStorage.setItem(fruit, value);
  };
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
        <Button onClick={() => handleClick(id, amount)}>🛒</Button>
        <NumberInput
          color={'whiteAlpha.900'}
          defaultValue={1}
          min={0.5}
          max={5}
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
