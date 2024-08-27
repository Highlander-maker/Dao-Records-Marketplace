import { useWalletModal } from "@/modules/modals/hooks";
import { Plus } from "lucide-react";
import { Button, Icon } from "@chakra-ui/react";
import React, { FC } from "react";
import Connected from "./Connected";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useAndromedaStore } from "@/zustand/andromeda";

interface ConnectWalletProps {}

const ConnectWallet: FC<ConnectWalletProps> = (props) => {
  const {} = props;
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();
  const open = useWalletModal();

  if (client) {
    return <Connected data-testid="connected-wallet" />;
  }

  return (
    <Button
      leftIcon={<Icon as={Plus} boxSize={5} />}
      bg="#B065C8"  // Same background color as Store button
      color="white"  // Light gray text color
      border="2px solid"  // Add a border
      borderColor="#8A4CA5"  // Cyan border color
      _hover={{ bg: "#9B5BBA", color: "#7B4192", borderColor: "dark" }}// Lighter background and border on hover
      _active={{ bg: "#7B4192", color: "white", borderColor: "#5E3170" }}  // Adjust active background and border color
      _focus={{ boxShadow: "outline" }}
      onClick={open}
      isLoading={isLoading}
      data-testid="connect-wallet-button"
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
