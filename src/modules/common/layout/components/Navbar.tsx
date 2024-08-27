import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import { useAndromedaStore } from "@/zustand/andromeda";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  const { config } = useApp();
  const { balance, isConnected } = useAndromedaStore();

  return (
    <Box py="2" px="8" bg="#1a202c"> {/* Background matches the dark theme */}
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
      >
        <Link href={LINKS.home()} passHref>
          <Text as="a" fontSize="lg" fontWeight="bold" color="white"> {/* Set the color to white */}
            {config.name}
          </Text>
        </Link>
        
        <Flex direction="row" ml="auto" gap="6" alignItems="center">  {/* Increase gap between buttons */}
          {/* Display the balance only if the wallet is connected */}
          {isConnected && balance && balance.length > 0 && (
            <Text fontSize="md" fontWeight="bold" color="cyan.300">
              {balance[0].amount} {balance[0].denom.toUpperCase()}
            </Text>
          )}
          <CollectionDropdown />
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
