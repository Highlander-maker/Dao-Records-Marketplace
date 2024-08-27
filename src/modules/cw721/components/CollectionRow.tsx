import { LINKS } from "@/utils/links";
import { Box, Button, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import CollectionRowToken from "./CollectionRowToken";
import { useAppUtils } from "@/lib/app/hooks";
import { useGetCw721Tokens } from "@/lib/graphql/hooks/cw721";
import { IAuctionCollection } from "@/lib/app/types";

interface Cw721CollectionRowProps {
  collectionId: string;
}

const Cw721CollectionRow: FC<Cw721CollectionRowProps> = ({ collectionId }) => {
  const { getCollection } = useAppUtils();
  const collection = getCollection(collectionId) as IAuctionCollection;
  const { data: allTokens } = useGetCw721Tokens(collection.cw721);

  return (
    <Box p="6" rounded="xl" bg="gray.800" boxShadow="lg" data-testid="cw721-collection-row">
      <SimpleGrid columns={4} spacing="6">
        <GridItem data-testid="collection-info">
          <Flex direction="column" gap="4" alignItems="start">
            <Text fontSize="2xl" fontWeight="bold" color="cyan.300" data-testid="collection-name">
              {collection.name}
            </Text>
            <Link href={LINKS.collection(collectionId)} passHref>
              <Button as="a" w="full" bg="purple.600" color="white" _hover={{ bg: "purple.700" }} data-testid="explore-collection-button">
                Explore Collection
              </Button>
            </Link>
          </Flex>
        </GridItem>
        {allTokens?.slice(0, 3).map((tokenId) => (
          <GridItem key={tokenId} alignSelf='center' data-testid={`token-card-${tokenId}`}>
            <CollectionRowToken tokenId={tokenId} collection={collection} contractAddress={collection.cw721} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cw721CollectionRow;
