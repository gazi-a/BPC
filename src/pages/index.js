import * as React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/sideBar";
import MainContent from "../components/mainContent";
import { Flex } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Layout>
      <Flex>
        <Sidebar />
        <MainContent />
      </Flex>
    </Layout>
  );
};
export default IndexPage;
