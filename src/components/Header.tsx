

import React, { useState } from 'react';
import { connectWallet, switchToSepolia } from '../utils/walletUtils';
import { ethers } from 'ethers';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletBalance, setWalletBalance] = useState<string | null>(null);
    const [showBalance, setShowBalance] = useState<boolean>(false); // Balance visibility state
    const [networkError, setNetworkError] = useState<boolean>(false);

    // Handle wallet connection logic
    const handleConnectWallet = async () => {
        if (walletAddress) {
            // Toggle balance visibility if wallet is already connected
            setShowBalance((prev) => !prev);
        } else {
            const account = await connectWallet();
            if (account) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const network = await provider.getNetwork();

                if (network.chainId === 11155111) {
                    setWalletAddress(account);
                    setNetworkError(false);

                    // Fetch Wallet Balance
                    const balance = await provider.getBalance(account);
                    setWalletBalance(ethers.utils.formatEther(balance)); 
                    setShowBalance(true); // Show balance after connecting
                } else {
                    setNetworkError(true);
                    await switchToSepolia();
                }
            }
        }
    };

    return (
        <header className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-30">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold tracking-wide">CrowdFunding</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:bg-indigo-800 hover:scale-105 px-4 py-2 rounded-md transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Connect Wallet Button & Balance Display */}
                <div>
                    {walletAddress ? (
                        <div className="flex items-center gap-4">
                            <span className="bg-green-500 text-white py-2 px-4 rounded-md">
                                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                            </span>

                            {/* Toggle Balance Visibility */}
                            {showBalance && walletBalance && (
                                <span className="bg-yellow-500 text-black py-2 px-4 rounded-md">
                                    {walletBalance} ETH
                                </span>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={handleConnectWallet}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition-all duration-300"
                        >
                            {walletAddress ? "Hide Balance" : "Connect Wallet"}
                        </button>
                    )}

                    {/* Network Error Message */}
                    {networkError && (
                        <p className="text-red-500 mt-2 text-sm">
                            ❌ Please switch to the Sepolia Testnet.
                        </p>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-3xl hover:scale-110 transition-transform duration-300"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <nav className="md:hidden mt-2 flex flex-col gap-4 text-center bg-indigo-700 p-4 rounded-md">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:bg-indigo-800 hover:scale-105 px-4 py-2 rounded-md transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
