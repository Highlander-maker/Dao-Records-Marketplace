// CrowdfundTokensList.tsx

import { useGetCrowdfund } from "@/lib/graphql/hooks/crowdfund";
import { SearchIcon } from "@/theme/icons";
import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { SlidersHorizontal } from "lucide-react";
import React, { FC, useState } from "react";
import Cw721TokenCard from "../cw721/components/Cw721TokenCard";
import { useGetCollection } from "@/lib/app/hooks/useGetCollection";
import { ICrowdfundCollection } from "@/lib/app/types";

interface CrowdfundTokensListProps {
  collectionId: string;
  contractAddress: string;
}

const CrowdfundTokensList: FC<CrowdfundTokensListProps> = ({ collectionId, contractAddress }) => {
  const { data: crowdfund } = useGetCrowdfund(contractAddress);
  const [filterOpen, setFilterOpen] = useState(false);
  const collection = useGetCollection<ICrowdfundCollection>(collectionId);

   // ADD THESE LOGS
   console.log("Crowdfund Data:", crowdfund); // Check if crowdfund data is fetched
   console.log("Available Tokens:", crowdfund?.availableTokens); // Check available tokens

  return (
    <Box data-testid="crowdfund-tokens-list" p="8" bg="gray.900" color="white" borderRadius="lg">
      <HStack spacing="4" mb="8">
        <Button
          onClick={() => setFilterOpen((prev) => !prev)}
          leftIcon={<SlidersHorizontal height={16} />}
          variant="solid"
          bg="cyan.700"
          color="white"
          _hover={{ bg: "cyan.600" }}
          _active={{ bg: "cyan.800" }}
          _focus={{ boxShadow: "outline" }}
          data-testid="filter-button"
          borderRadius="md"
          px="4"
          py="2"
        >
          Filter
        </Button>
        <InputGroup w="full">
          <InputLeftElement pointerEvents="none">
            <SearchIcon width={16} color="gray.500" data-testid="search-icon" />
          </InputLeftElement>
          <Input
            placeholder="Search collection, item, or user"
            bg="cyan.900"
            color="white"
            borderRadius="md"
            _placeholder={{ color: "gray.300" }}
            _hover={{ borderColor: "cyan.600" }}
            _focus={{ borderColor: "cyan.600", boxShadow: "outline" }}
            data-testid="search-input"
          />
        </InputGroup>
        <Menu placement="bottom-end">
          <MenuButton
            as={Button}
            variant="solid"
            bg="cyan.700"
            color="white"
            _hover={{ bg: "cyan.600" }}
            _active={{ bg: "cyan.800" }}
            _focus={{ boxShadow: "outline" }}
            data-testid="sort-menu-button"
            borderRadius="md"
            px="10"
            py="2"
          >
            Price: low to high
          </MenuButton>
          <MenuList
            data-testid="sort-menu-list"
            bg="gray.700"
            borderColor="gray.600"
          >
            <MenuItem
              data-testid="sort-low-to-high"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            >
              Price: low to high
            </MenuItem>
            <MenuItem
              data-testid="sort-high-to-low"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            >
              Price: high to low
            </MenuItem>
            <MenuItem
              data-testid="sort-recently-listed"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            >
              Recently listed
            </MenuItem>
            <MenuItem
              data-testid="sort-auction-ending-soon"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            >
              Auction ending soon
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Box mt="4" data-testid="tokens-container">
        <Flex direction="row" gap="4">
          {filterOpen && (
            <Box
              w="full"
              maxW="64"
              border="1px"
              borderColor="gray.600"
              bg="gray.800"
              rounded="2xl"
              top="4"
              position="sticky"
              alignSelf="start"
              p="6"
              data-testid="filter-container"
            >
              {/* Add filter options here */}
              <Text color="white" fontSize="md">Filter Options</Text>
            </Box>
          )}
          <SimpleGrid columns={filterOpen ? 3 : 4} spacing={4} w="full">
            {crowdfund?.availableTokens?.map((tokenId) => (
              <GridItem key={tokenId} data-testid={`token-card-${tokenId}`}>
                <Cw721TokenCard
                  contractAddress={collection?.cw721 || ""}
                  tokenId={tokenId}
                  collectionId={collectionId}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default CrowdfundTokensList;
