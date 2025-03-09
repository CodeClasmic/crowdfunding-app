import { ethers } from 'ethers';
import React from 'react';

interface CampaignCardProps {
    owner: string;
    title: string;
    description: string;
    imageUrl: string;
    progress: number;
    target: number;
    amountCollected: number;
    deadline: number;
    onClick: () => void; // Navigating to campaign details
}

const CampaignCard: React.FC<CampaignCardProps> = ({
    owner,
    title,
    description,
    imageUrl,
    progress,
    target,
    amountCollected,
    deadline,
    onClick
}) => {
    // Calculate remaining days until deadline
    const remainingDays = Math.max(0, Math.ceil((deadline * 1000 - Date.now()) / (1000 * 60 * 60 * 24)));

    return (
        <div 
            className="bg-[#27293d] text-white p-5 rounded-xl shadow-md 
                       hover:shadow-blue-600 hover:scale-105 transition-transform 
                       duration-300 border border-blue-500">
            
            <img 
                src={imageUrl || '/fallback-image.jpg'} // Fallback image
                alt="Project" 
                className="rounded-t-xl w-full h-48 object-cover"
            />
            
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-400">By: {owner.slice(0, 6)}...{owner.slice(-4)}</p>
                <p className="text-sm text-gray-400 mb-2">{description}</p>

                {/* Progress Bar */}
                <div className="h-2 w-full bg-gray-700 rounded-full my-3">
                    <div 
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }} 
                    ></div>
                </div>
                <p className="text-sm text-gray-300">{progress}% funded</p>

                {/* Campaign Details */}
                <div className="flex justify-between text-gray-400 text-sm mt-3">
                    <span>Target: {ethers.utils.formatEther(target)} ETH</span>
                    <span>Raised: {ethers.utils.formatEther(amountCollected)} ETH</span>
                    <span>{remainingDays} days left</span>
                </div>

                {/* Button */}
                <button 
                    onClick={onClick}
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-5 rounded-lg
                               hover:bg-purple-500 transition-colors duration-300">
                    View Project
                </button>
            </div>
        </div>
    );
};

export default CampaignCard;
