import { useBuyNowConstruct } from "@/lib/andrjs";
import useApp from "@/lib/app/hooks/useApp";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import { coins } from "@cosmjs/proto-signing";
import { FC } from "react";
import { useExecuteModal } from "../hooks";
import { BuyNowModalProps } from "../types";
import { Msg } from "@andromedaprotocol/andromeda.js";
import { useGetTokenMarketplaceInfo } from "@/lib/graphql/hooks/marketplace";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";

const BuyNowModal: FC<BuyNowModalProps> = (props) => {
  const { contractAddress, tokenId, marketplaceAddress } = props;
  const { data: token } = useGetCw721Token(contractAddress, tokenId);
  const { data: marketplaceState } = useGetTokenMarketplaceInfo(
    marketplaceAddress,
    contractAddress,
    tokenId
  );

  const { config } = useApp();
  const construct = useBuyNowConstruct();

  const DENOM = marketplaceState?.latestSaleState.coin_denom ?? config?.coinDenom ?? "ujunox";

  const openExecute = useExecuteModal(marketplaceAddress);

  const onSubmit = () => {
    const msg = construct({ tokenAddress: contractAddress, tokenId: tokenId });
    console.log("price:", marketplaceState?.latestSaleState.price);
    console.log(JSON.stringify(msg));
    console.log("DENOM:", DENOM);
    const funds = coins(marketplaceState?.latestSaleState.price ?? 0, DENOM);
    openExecute(msg, true, funds);
  };

  return (
    <Box>
      <Heading size="md" mb="6" fontWeight="bold" color="cyan.100">
        Purchase
      </Heading>
      <Text textStyle="light" mb="4" color="gray.300">
        You are about to buy <b>{token?.metadata?.name}</b> which has tokenId <b>{tokenId}</b>.
      </Text>
      <Box>
        <FormControl>
          <Button
            onClick={onSubmit}
            w="full"
            mt="6"
            variant="solid"
            bg="cyan.600"  // Set a specific background color
            color="white"  // Ensure the text is white
            _hover={{ bg: "cyan.700" }}  // Define a hover state for better UX
            _active={{ bg: "cyan.800" }}  // Active state styling
          >
            Buy Now
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default BuyNowModal;