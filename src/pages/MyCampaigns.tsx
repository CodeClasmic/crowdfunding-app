import React, { useEffect, useState } from 'react';
import CampaignCard from '../components/CampaignCard';
import { ethers } from 'ethers';

interface Campaign {
    owner: string;
    title: string;
    description: string;
    target: string;
    deadline: number;
    amountCollected: string;
    image: string;
}

const MyCampaigns: React.FC = () => {
    const [myCampaigns, setMyCampaigns] = useState<Campaign[]>([]);
    const [userAddress, setUserAddress] = useState<string | null>(null);

    // Mock function to simulate fetching campaigns (Replace with actual contract logic)
    const fetchMyCampaigns = async () => {
        // Example data — Replace with contract interaction logic later
        const mockData: Campaign[] = [
            {
                owner: '0x123...',
                title: 'Green Energy Revolution',
                description: 'Bringing sustainable energy solutions to remote areas.',
                target: ethers.utils.parseEther('3').toString(),
                deadline: Math.floor(Date.now() / 1000) + (10 * 24 * 60 * 60), // 10 days left
                amountCollected: ethers.utils.parseEther('1.5').toString(),
                image: 'https://source.unsplash.com/400x300/?greenenergy,blockchain'
            },
        ];

        const filteredCampaigns = mockData.filter((campaign) => 
            campaign.owner.toLowerCase() === userAddress?.toLowerCase()
        );

        setMyCampaigns(filteredCampaigns);
    };

    // Simulate fetching the connected wallet address (Replace with contract logic)
    const getConnectedWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                setUserAddress(accounts[0]);
            } else {
                alert('Please connect your wallet.');
            }
        } else {
            alert('MetaMask is not installed.');
        }
    };

    useEffect(() => {
        getConnectedWallet().then(() => fetchMyCampaigns());
    }, [userAddress]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a40] to-[#0f0f2d] text-white p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">My Campaigns</h1>

                {myCampaigns.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myCampaigns.map((campaign, index) => (
                            <CampaignCard
                                key={index}
                                title={campaign.title}
                                description={campaign.description}
                                imageUrl={campaign.image}
                                progress={(parseFloat(ethers.utils.formatEther(campaign.amountCollected)) /
                                    parseFloat(ethers.utils.formatEther(campaign.target))) * 100}
                                owner={''}
                                target={0}
                                amountCollected={0}
                                deadline={0}
                                onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center">No campaigns found for your wallet address.</p>
                )}
            </div>
        </div>
    );
};

export default MyCampaigns;
