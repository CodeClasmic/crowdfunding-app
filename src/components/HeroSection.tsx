import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HeroSection: React.FC = () => {
    return (
        <section className="text-center py-20 relative">
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <h1
                className="text-6xl font-extrabold mb-4 relative z-10 animate-fade-in">
                Empower Dreams with Blockchain Crowdfunding
            </h1>
            <p className="text-lg mb-6 relative z-10">Support innovative projects securely on the blockchain.</p>

            {/* Updated Button with Link */}
            <Link
                to="/explore" 
                className="bg-blue-600 py-3 px-8 rounded-lg text-lg font-semibold text-white relative z-[15] 
                    hover:bg-purple-500 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
                Explore Campaigns
            </Link>
        </section>
    );
};

export default HeroSection;
