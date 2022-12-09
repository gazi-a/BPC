import * as React from "react";
import PropTypes from "prop-types";

import { ChakraProvider } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <main>{children}</main>
    </ChakraProvider>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
