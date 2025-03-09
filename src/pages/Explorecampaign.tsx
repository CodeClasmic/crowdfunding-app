import React from 'react';
import { Link } from 'react-router-dom';
import AllCampaigns from '../components/AllCampaigns';

const ExploreCampaign: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a40] to-[#0f0f2d] text-white p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">Explore Campaigns</h1>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mb-6">
                    <Link 
                        to="/create-campaign" 
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                    >
                        Create Campaign
                    </Link>

                    <Link 
                        to="/my-campaigns" 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                    >
                        My Campaigns
                    </Link>
                </div>

                {/* All Campaigns Section */}
                <AllCampaigns />
            </div>
        </div>
    );
};

export default ExploreCampaign;
