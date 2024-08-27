// Header.tsx

import { ICrowdfundCollection } from "@/lib/app/types";
import { useGetCrowdfund } from "@/lib/graphql/hooks/crowdfund/useGetCrowdfund";
import { useGetCw721 } from "@/lib/graphql/hooks/cw721";
import { Box, Flex, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import CrowdfundGroupInfo from "./CrowdfundGroupInfo";

interface HeaderProps {
  collection: ICrowdfundCollection;
}

const Header: FC<HeaderProps> = ({ collection }) => {
  const { data: crowdfund } = useGetCrowdfund(collection.crowdfund);
  const { data: cw721 } = useGetCw721(collection.cw721);

  return (
    <Grid templateColumns="repeat(2,1fr)" gap="4" py="2" data-testid="header">
      <GridItem colSpan={1} data-testid="header-left">
        <Flex direction="column" gap="2" align="start" maxW="md">
          {/* Check if cw721 data is loaded before rendering */}
          {cw721 ? (
            <>
              <Text fontSize="2xl" fontWeight="bold" color="cyan.100" data-testid="collection-name">
                {cw721.contractInfo?.name || "Unnamed Collection"}
              </Text>
              <Text textStyle="light" fontSize="sm" color="cyan.100" data-testid="collection-minter">
                Minter - <b>{cw721.minter || "Unknown"}</b>
              </Text>
            </>
          ) : (
            <Text fontSize="2xl" fontWeight="bold" color="cyan.100" data-testid="collection-name">
              Loading...
            </Text>
          )}
          <Text fontWeight="light" fontSize="sm" mt="2" color="gray.300">
            Join us in celebrating the incredible talent of our artists by purchasing tickets to our exclusive showcase events. Your support not only grants you access to unforgettable performances but also helps propel the artists forward with the power of blockchain technology.
            <Link
              href="https://github.com/Highlander-maker/dao_records"
              isExternal
              color="cyan.300"
              fontWeight="bold"
              ml="1"
            >
              Read more
            </Link>
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} data-testid="header-right">
        <CrowdfundGroupInfo
          collection={collection}
          collectionName={cw721?.contractInfo?.name || "Unnamed Collection"}
        />
      </GridItem>
    </Grid>
  );
};

export default Header;
