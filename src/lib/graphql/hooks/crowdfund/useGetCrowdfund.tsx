import { useCodegenGeneratedAdoCrowdfundQuery } from "@andromedaprotocol/gql/dist/__generated/react";


export function useGetCrowdfund(
    adoAddress: string,
) {
    const { loading, error, data } = useCodegenGeneratedAdoCrowdfundQuery({
        variables: {
            'ADO_crowdfund_address': adoAddress
        }
    });
    
    // Enhanced logging to capture error details
    if (error) {
        console.error("Error fetching crowdfund data:", error);
    }

    console.log("Crowdfund Query Variables:", {
        adoAddress,
    });

    return {
        loading,
        error,
        data: data?.ADO.crowdfund,  // Only return crowdfund data if available
    };
}
