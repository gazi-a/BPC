import React from "react";

import {
  SimpleGrid,
  Image,
  Text,
  Stack,
  Box,
  HStack,
  Select,
  Input,
} from "@chakra-ui/react";
import Chart from "../chart";
import PlaceHolder from "../../images/placeholder.png";

const MainContent = () => {
  return (
    <Stack textAlign="left" w={{ base: "100%", lg: "85%" }}>
      <Box bg="#eee" p={10}>
        <Text
          as="h2"
          fontSize={"4xl"}
          fontWeight="bold"
          textAlign="left"
          mb={3}
          pb="5px"
          borderBottom="1px solid #c7c7c7"
          color="#002840"
        >
          Bybit Broker
        </Text>
        <Text as="p" fontWeight="bold" fontSize={"1xl"} textAlign="left" mb={5}>
          Sub Account #3
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} py={5} spacing={10}>
          <Box>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={PlaceHolder}
              w="100%"
              h="100%"
            />
          </Box>
          <Stack spacing={2}>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Data source
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Market
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Timeframe
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                From
              </Text>
              <Input
                type="date"
                placeholder="phone number"
                w={"50%"}
                bg="white"
              />
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                To
              </Text>
              <Input
                type="date"
                placeholder="phone number"
                w={"50%"}
                bg="white"
              />
            </HStack>
          </Stack>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} py={5} spacing={10}>
          <Box>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={PlaceHolder}
              w="100%"
              h="100%"
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
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
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
              w="100%"
              h="100%"
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
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
            <HStack>
              <Text color={"gray.500"} fontSize={"lg"} w={"50%"}>
                Trading Strategy
              </Text>
              <Select placeholder="Select option" w={"50%"} bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
          </Stack>
        </SimpleGrid>
        <Chart />
      </Box>
    </Stack>
  );
};
export default MainContent;
