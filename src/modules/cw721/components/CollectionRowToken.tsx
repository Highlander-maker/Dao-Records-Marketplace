import { IBaseCollection } from "@/lib/app/types";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";
import FallbackImage from "@/modules/common/ui/Image/FallbackImage";
import { LINKS } from "@/utils/links";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface CollectionRowTokenProps {
  tokenId: string;
  collection: IBaseCollection;
  contractAddress: string;
}

const CollectionRowToken: FC<CollectionRowTokenProps> = ({ tokenId, collection, contractAddress }) => {
  const { data: token } = useGetCw721Token(contractAddress, tokenId);

  return (
    <Box p={2}>
      <Link href={LINKS.cw721Token(collection.id, tokenId)}>
        <FallbackImage
          src={token?.metadata?.image}
          alt={token?.metadata?.name ?? "Token Image"}
          borderRadius="lg"
          cursor="pointer"
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out",
          }}
          transition="ease-in-out"
          transitionProperty="transform"
          transitionDuration="150ms"
        />
      </Link>
    </Box>
  );
};

export default CollectionRowToken;
