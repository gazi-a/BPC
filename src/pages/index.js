import * as React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/sideBar";
import MainContent from "../components/mainContent";
import {Stack } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Layout>
      <Stack direction={{ base: "column", md: "row" }}>
        <Sidebar />
        <MainContent />
      </Stack>
    </Layout>
  );
};
export default IndexPage;
