import { ModalType, CrowdfundGroupBuyModalProps } from "../types";
import useGlobalModalContext from "./useGlobalModalContext";

/**
 * Wrapper hook for opening the message modal for an execute message.
 *  ```
 *  // Example Usage
 *  const open = useExecuteModal("somecontractaddress")
 *
 *  await open(msg, false, [...some coins])
 *
 *  ```
 * @param contractAddress
 * @returns
 */
export default function useCrowdfundGroupBuyModal(data: Omit<CrowdfundGroupBuyModalProps, 'modalType'>) {
  const { open } = useGlobalModalContext();

  console.log("CrowdfundGroupBuyModal data:", data); // Add this to debug

  return () =>
    open(ModalType.CrowdfundGroupBuy, data);
}


