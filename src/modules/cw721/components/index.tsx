import { Box, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { FC } from "react";
import Header from "./Header";
import { IBaseCollection } from "@/lib/app/types";
import Cw721TokensList from "./Cw721TokensList";

interface Props {
  collection: IBaseCollection;
  contractAddress: string;
}

const Cw721Page: FC<Props> = (props) => {
  const { collection, contractAddress } = props;
  
  return (
    <Flex direction="column">
      <Box>{/* Add a Banner component here if you want to show an image or other content */}</Box>
      <Box py="4">
        <Header collection={collection} contractAddress={contractAddress} />
      </Box>
      <Divider my="4" />
      <Box py="2">
        <Tabs colorScheme="purple" variant="solid-rounded" align="center">
          <TabList>
            <Tab _selected={{ color: "white", bg: "purple.500" }}>Items</Tab>
            <Tab _selected={{ color: "white", bg: "purple.500" }}>Activity</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Cw721TokensList collectionId={collection.id} contractAddress={contractAddress} />
            </TabPanel>
            <TabPanel>Activity</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Cw721Page;
