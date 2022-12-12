import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH={{ base: "auto", lg: "100vh" }}
      w={{ base: "100%", lg: "15%" }}
      position="relative"
      bg={{ base: "#eee", lg: "#002840" }}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
        color="white"
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", lg: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box p={5} h="full" position="fixed" top="10px" {...rest}>
      <Text
        textAlign="left"
        mb={3}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Live Trading
      </Text>
      <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      <List spacing={1} textAlign="left">
        <ListItem>
          <ListIcon as={BsCircleFill} color="green.500" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="green.500" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="yellow.500" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="green.500" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="grey" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="green.500" />
          Bybit #1
        </ListItem>
      </List>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 0, lg: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
    </Flex>
  );
};
export default Sidebar;
