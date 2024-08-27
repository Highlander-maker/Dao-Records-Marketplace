import { IBaseCollection } from "@/lib/app/types";
import { useGetCw721 } from "@/lib/graphql/hooks/cw721";
import { Box, Flex, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import React, { FC } from "react";

interface HeaderProps {
  contractAddress: string;
  collection: IBaseCollection;
}

const Header: FC<HeaderProps> = ({ contractAddress }) => {
  const { data: cw721 } = useGetCw721(contractAddress);

  return (
    <Grid templateColumns="repeat(2,1fr)" gap="6" py="4">
      <GridItem colSpan={1}>
        <Flex direction="column" gap="4" align="start" maxW="md">
          <Text fontSize="3xl" fontWeight="extrabold" color="cyan.300">
            {cw721?.contractInfo.name}
          </Text>
          <Text fontSize="sm" color="gray.400">
            Minter - <b>{cw721?.minter}</b>
          </Text>
          <Text fontWeight="light" fontSize="sm" mt="2" color="gray.300">
            Secure your spot in the artist&apos;s history and enjoy special
            perks that come with being a true supporter of their work.
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
      <GridItem colSpan={1}>
        {/* Future stat component can be placed here */}
      </GridItem>
    </Grid>
  );
};

export default Header;
