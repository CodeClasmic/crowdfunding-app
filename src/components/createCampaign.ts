// utils/createCampaign.ts
import { prepareContractCall, sendAndConfirmTransaction } from "thirdweb";
import contract from "../contract";
import { TypedData, Definition } from "ox/_types/core/TypedData";
import { SendTransactionResult } from "thirdweb/dist/types/transaction/types";
import { SendTransactionOption } from "thirdweb/dist/types/wallets/interfaces/wallet";

export async function createCampaign(
  owner: string,
  title: string,
  description: string,
  target: number,
  deadline: number,
  image: string
) {
  try {
    console.log("Preparing contract call...");

    // Convert target to wei (1 ETH = 10^18 wei)
    const targetInWei = BigInt(target * 1e18);
    console.log("Target in wei:", targetInWei);

    // Convert deadline to a Unix timestamp (bigint)
    const deadlineBigInt = BigInt(Math.floor(deadline));
    console.log("Deadline as Unix timestamp:", deadlineBigInt);

    // Prepare the contract call
    const transaction = prepareContractCall({
      contract,
      method: "createCampaign", // The name of the method in your smart contract
      params: [owner, title, description, targetInWei, deadlineBigInt, image], // Parameters for the method
    });

    console.log("Sending transaction...");

    // Send and confirm the transaction
    const result = await sendAndConfirmTransaction({
      transaction,
      account: {
          address: owner,
          sendTransaction: function (tx: SendTransactionOption): Promise<SendTransactionResult> {
              throw new Error("Function not implemented.");
          },
          signMessage: async ({ message, originalMessage, chainId }) => {
            // Implement your signMessage logic here
            return "0x"; // Replace with actual signed message
          },
          signTypedData: function <const typedData extends TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(_typedData: Definition<typedData, primaryType>): Promise<`0x${string}`> {
              throw new Error("Function not implemented.");
          }
      }, // Convert owner to Account type
    });

    console.log("Transaction result:", result);
    return result;
  } catch (error) {
    console.error("Error in createCampaign:", error);
    throw error; // Re-throw the error to handle it in the component
  }
}