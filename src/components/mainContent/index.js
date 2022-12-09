import React from "react";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  Box,
  StackDivider,
  HStack,
  Icon,
  Select,
  Input,
} from "@chakra-ui/react";
import Chart from "../chart";
import PlaceHolder from "../../images/placeholder.png";
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const MainContent = () => {
  return (
    <Container maxW={"80%"} py={3} textAlign="left">
      <Text as="h2" fontSize={"5xl"} textAlign="left" mb={5}>
        Bybit Broker
      </Text>
      <Text as="p" fontSize={"1xl"} textAlign="left" mb={5}>
        Sub Account #3
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} py={5} spacing={1}>
        <Box maxW="100%">
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={PlaceHolder}
            objectFit={"cover"}
          />
        </Box>
        <Stack spacing={2}>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Data source
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Market
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Timeframe
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              From
            </Text>
            <Input type="date" placeholder="phone number"  w={"50%"}/>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              To
            </Text>
            <Input type="date" placeholder="phone number"  w={"50%"}/>
          </HStack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} py={5} spacing={10}>
        <Box>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={PlaceHolder}
            objectFit={"cover"}
          />
        </Box>
        <Stack spacing={2}>
          <Text as="h3" fontSize={"2xl"}>
            Backtesting settings
          </Text>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
        </Stack>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} py={5} spacing={10}>
        <Box>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={PlaceHolder}
            objectFit={"cover"}
          />
        </Box>
        <Stack spacing={2}>
          <Text as="h3" fontSize={"2xl"}>
            Backtesting settings
          </Text>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack>
            <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
              Trading Strategy
            </Text>
            <Select placeholder="Select option" w={"50%"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
        </Stack>
      </SimpleGrid>
      <Chart />
    </Container>
  );
};
export default MainContent;
