import React from 'react';
import HeroSection from '../components/HeroSection';
import CampaignCard from '../components/CampaignCard'; // Updated import

const Home: React.FC = () => {
    const campaigns = [
        {
            id: 1,
            title: 'Blockchain for Healthcare',
            description: 'Revolutionizing medical data security.',
            imageUrl: 'https://images.pexels.com/photos/5435971/pexels-photo-5435971.jpeg',
            progress: 0
        },
        {
            id: 2,
            title: 'Green Energy Blockchain',
            description: 'Tracking renewable energy production with transparency.',
            imageUrl: 'https://images.pexels.com/photos/18709783/pexels-photo-18709783.jpeg',
            progress: 0
        },
        {
            id: 3,
            title: 'Charity Funding Platform',
            description: 'Empowering global causes with secure donations.',
            imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop',
            progress: 0
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a40] to-[#0f0f2d] text-white">
            <div className="container mx-auto p-6">

                {/* Hero Section */}
                <HeroSection />

                {/* Featured Projects Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    {campaigns.map((project) => (
                        <CampaignCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            progress={project.progress} owner={''} target={0} amountCollected={0} deadline={0} onClick={function (): void {
                                throw new Error('Function not implemented.');
                            } }                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Home;
