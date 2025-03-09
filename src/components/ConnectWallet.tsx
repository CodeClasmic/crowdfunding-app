import React from "react";
import { ethers } from "ethers";

// Define the type for the props
interface ConnectWalletProps {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);  // Updating the parent state with the connected wallet address
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={connectWallet}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-purple-500 hover:scale-105 transition-transform duration-300 shadow-md"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
