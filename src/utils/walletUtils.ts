// /utils/walletUtils.ts
import { ethers } from 'ethers';

// Connect Wallet Function
export const connectWallet = async (): Promise<string | null> => {
    if (window.ethereum) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            return accounts[0]; // Return connected account address
        } catch (error) {
            console.error("Wallet connection failed:", error);
            return null;
        }
    } else {
        alert("MetaMask is not installed. Please install it to connect your wallet.");
        return null;
    }
};

// Switch Network Function (Ethereum Sepolia Testnet)
export const switchToSepolia = async (): Promise<boolean> => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xaa36a7' }] // Ethereum Sepolia chainId
            });
            return true;
        } catch (error: any) {
            if (error.code === 4902) { // Chain not added error
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: '0xaa36a7',
                            chainName: 'Ethereum Sepolia Testnet',
                            nativeCurrency: {
                                name: 'SepoliaETH',
                                symbol: 'ETH',
                                decimals: 18
                            },
                            rpcUrls: ['https://rpc.sepolia.org'],
                            blockExplorerUrls: ['https://sepolia.etherscan.io']
                        }]
                    });
                    return true;
                } catch (addError) {
                    console.error("Failed to add Sepolia network:", addError);
                    return false;
                }
            } else {
                console.error("Failed to switch network:", error);
                return false;
            }
        }
    } else {
        alert("MetaMask is not installed. Please install it to connect your wallet.");
        return false;
    }
};
