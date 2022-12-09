import React, { ReactNode } from "react";
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
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
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
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      mx="3"
      p={5}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Text textAlign="left" mb={3} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Live Trading
      </Text>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
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
          <ListIcon as={BsCircleFill} color="blackAlpha.400" />
          Bybit #1
        </ListItem>
        <ListItem>
          <ListIcon as={BsCircleFill} color="green.500" />
          Bybit #1
        </ListItem>
      </List>
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
    </Box>
  );
};

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}
//     >
//       <Flex
//         align="center"
//         p="1"
//         mx="1"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
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

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
export default Sidebar;
