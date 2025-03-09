// utils/contract.ts
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "./client";

// Define the chain (e.g., Sepolia testnet)
const chain = defineChain(11155111);

// ABI of your smart contract
const abi = [
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "string", name: "_title", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "uint256", name: "_target", type: "uint256" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      { internalType: "string", name: "_image", type: "string" },
    ],
    name: "createCampaign",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  // ... (other ABI entries)
] as const;

// Connect to your contract
const contract = getContract({
  client,
  chain,
  address: "0x44c078C2f5b5b7eD0949E100CB6A56991683C6Dd", // Replace with your contract address
  abi, // Pass the ABI
});

export default contract;