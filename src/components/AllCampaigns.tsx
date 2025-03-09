import React, { useEffect, useState } from 'react';
import CampaignCard from './CampaignCard'; // Assuming CampaignCard already exists
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

const AllCampaigns: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);

    // Mock function for fetching campaigns (Replace this with actual contract interaction)
    const fetchCampaigns = async () => {
        // Example campaign data (Replace with data from your contract)
        const mockData: Campaign[] = [
            {
                owner: '0x123...',
                title: 'Blockchain for Healthcare',
                description: 'Revolutionizing medical data security.',
                target: ethers.utils.parseEther('5').toString(),
                deadline: Math.floor(Date.now() / 1000) + (5 * 24 * 60 * 60), // 5 days left
                amountCollected: ethers.utils.parseEther('2.5').toString(),
                image: 'https://images.pexels.com/photos/5435971/pexels-photo-5435971.jpeg',
            },
        ];
        setCampaigns(mockData);
    };

    useEffect(() => {
        fetchCampaigns();
    }, []);

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">All Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.length > 0 ? (
                    campaigns.map((campaign, index) => (
                        <CampaignCard
                            key={index}
                            title={campaign.title}
                            description={campaign.description}
                            imageUrl={campaign.image}
                            progress={(parseFloat(ethers.utils.formatEther(campaign.amountCollected)) /
                                parseFloat(ethers.utils.formatEther(campaign.target))) * 100} owner={''} target={0} amountCollected={0} deadline={0} onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } }                        />
                    ))
                ) : (
                    <p>No campaigns available yet.</p>
                )}
            </div>
        </div>
    );
};

export default AllCampaigns;
