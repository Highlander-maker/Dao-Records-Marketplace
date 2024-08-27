import { IMarketplaceCollection } from "@/lib/app/types";
import { useGetTokenMarketplaceInfo } from "@/lib/graphql/hooks/marketplace";
import MarketplaceStartStat from "@/modules/marketplace/MarketplaceStartStat";
import { MoreHorizontalIcon } from "@/theme/icons";
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  collection: IMarketplaceCollection;
  tokenId: string;
}

const Cw721MarketplaceState: FC<Props> = ({ collection, tokenId }) => {
  const { data: marketplace } = useGetTokenMarketplaceInfo(
    collection.marketplace,
    collection.cw721,
    tokenId
  );

  return (
    <Box data-testid="marketplace-state" p="2" bg="gray.800" borderRadius="lg" boxShadow="lg">
      <Box mb="3" data-testid="marketplace-start-stat">
        <MarketplaceStartStat
          collection={collection}
          tokenId={tokenId}
        />
      </Box>
      <Flex justify="space-between" align="start" gap="4">
        <Box data-testid="price-info">
          <Text fontSize="sm" fontWeight="bold" color="cyan.300">
            Price
          </Text>
          <Text fontWeight="medium" fontSize="lg" color="white">
            {marketplace?.latestSaleState.price} {marketplace?.latestSaleState.coin_denom}
          </Text>
        </Box>
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            icon={<MoreHorizontalIcon width={24} height={24} />}
            variant="outline"
            borderColor="cyan.300"
            color="cyan.300"
            _hover={{ bg: "cyan.600", color: "white" }}
            _focus={{ boxShadow: "outline" }}
            data-testid="menu-button"
          />
          <MenuList bg="gray.900" borderColor="cyan.600" data-testid="menu-list">
            <MenuItem _hover={{ bg: "cyan.600", color: "white" }} data-testid="menu-item-burn">
              Burn
            </MenuItem>
            <MenuItem _hover={{ bg: "cyan.600", color: "white" }} data-testid="menu-item-archive">
              Archive
            </MenuItem>
            <MenuItem _hover={{ bg: "cyan.600", color: "white" }} data-testid="menu-item-sell">
              Sell
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default Cw721MarketplaceState;
