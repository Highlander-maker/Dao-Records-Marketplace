import { Text, Box, Center, Button } from "@chakra-ui/react";
import { Check, ExternalLink } from "lucide-react";
import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useGlobalModalContext } from "../hooks";
import { TransactionModalProps } from "../types";
import ModalLoading from "./ModalLoading";
import type { ExecuteResult, InstantiateResult } from "@cosmjs/cosmwasm-stargate";
import { truncate } from "@/utils/text";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useAndromedaStore } from "@/zustand/andromeda";
import useQueryChain from "@/lib/graphql/hooks/chain/useChainConfig";

interface OptionalProps {
  onNextStage?: () => void;
}

const BroadcastingModal: FC<TransactionModalProps & OptionalProps> = memo(function BroadcastingModal(props) {
  const [loading, setLoading] = useState<boolean>(true);
  const client = useAndromedaClient();
  const { chainId } = useAndromedaStore();
  const { data: chainConfig } = useQueryChain(chainId);
  const { close, setError } = useGlobalModalContext();
  const [result, setResult] = useState<ExecuteResult | InstantiateResult | undefined>();

  const broadcast = useCallback(async () => {
    return client!.execute(
      props.contractAddress,
      props.msg,
      "auto",
      props.memo,
      props.funds
    );
  }, [props, client]);

  useEffect(() => {
    const broadcastTx = async () => {
      setLoading(true);
      try {
        const resp: ExecuteResult | InstantiateResult = await broadcast();
        setResult(resp);
        setLoading(false);
        if (props.onNextStage) props.onNextStage();
      } catch (_error) {
        setError(_error as Error);
        console.log(_error);
      }
    };

    const tId = setTimeout(() => {
      if (!result) broadcastTx();
    }, 500);

    return () => clearTimeout(tId);
  }, [broadcast, setError, props, result]);

  console.log(result, "Result");

  const TransactionInfo = useMemo(() => {
    if (!result) return <></>;
    const { transactionHash } = result as ExecuteResult | InstantiateResult;

    return (
      <Box
        sx={{
          border: "1px solid #D0D5DD",
          borderRadius: "12px",
          padding: "16px",
          width: "100%",
          fontSize: "14px",
          bg: "gray.800",  // Dark background
          color: "white",  // White text for contrast
        }}
        mt="40px"
      >
        <Text sx={{ fontWeight: "bold", color: "cyan.300" }}>Transaction #</Text>
        <Text mt="6px" color="cyan.300">
          <a
            href={
              chainConfig?.blockExplorerTxPages[0]?.replaceAll(
                "${txHash}",
                transactionHash
              ) ?? ""
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            {truncate(transactionHash)}{" "}
            <ExternalLink style={{ display: "inline-block" }} size="14px" />
          </a>
        </Text>
      </Box>
    );
  }, [props, result]);

  return (
    <Box
      sx={{
        bg: "gray.900",  // Dark background
        color: "white",  // White text for contrast
        padding: "6px",
      }}
    >
      {loading ? (
        <ModalLoading title="Broadcasting Your Transaction" />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Check
              style={{
                width: "100px",
                height: "100px",
                fontSize: "60px",
                color: "#7F56D9",
              }}
            />
            <Text mt="60px" sx={{ textAlign: "center", fontWeight: "bold" }}>
              Transaction Successful!
            </Text>
            {TransactionInfo}
            <Center>
              <Button
                mt="40px"
                variant="outline"
                sx={{ fontSize: "16px", padding: "10px 32px", color: "white", borderColor: "cyan.300" }}
                onClick={close}
              >
                Close
              </Button>
            </Center>
          </Box>
        </>
      )}
    </Box>
  );
});

export default BroadcastingModal;
