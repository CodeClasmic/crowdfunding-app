import React, { useState } from 'react';
import { createCampaign } from '../components/createCampaign'; // Import the function to interact with the smart contract
import ConnectWallet from '../components/ConnectWallet'; // Import your custom ConnectWallet component

const CreateCampaign: React.FC = () => {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState('');

  // State for connected wallet address
  const [account, setAccount] = useState<string | null>(null);

  // Handle form submission
  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!title || !description || !target || !deadline || !image) {
      alert('Please fill in all fields.');
      return;
    }

    // Ensure the user is connected to their wallet
    if (!account) {
      alert('Please connect your wallet to create a campaign.');
      return;
    }

    try {
      // Call the createCampaign function from your smart contract
      await createCampaign(
        account, // Pass the wallet address as the owner
        title,
        description,
        Number(target), // Convert target to a number
        new Date(deadline).getTime() / 1000, // Convert deadline to a Unix timestamp
        image
      );

      console.log("Campaign created successfully!");
      alert('Campaign created successfully!');
    } catch (error) {
      console.error('Error creating campaign:', error);
      if (error instanceof Error) {
        alert(`Error: ${error.message}`); // Display the error message
      } else {
        alert('An error occurred while creating the campaign.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a40] to-[#0f0f2d] text-white p-6">
      <div className="container mx-auto max-w-lg bg-[#27293d] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Create New Campaign</h1>

        {/* Connect Wallet Button */}
        <div className="mb-6 flex justify-center">
          <ConnectWallet setAccount={setAccount} />
        </div>

        {/* Campaign Form */}
        <form onSubmit={handleCreateCampaign} className="flex flex-col gap-4">
          {/* Campaign Title */}
          <input 
            type="text" 
            placeholder="Campaign Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />

          {/* Campaign Description */}
          <textarea
            placeholder="Campaign Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />

          {/* Target Amount (in ETH) */}
          <input
            type="text"
            placeholder="Target Amount (in ETH)"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />

          {/* Deadline */}
          <input
            type="date"
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />

          {/* Image URL */}
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-purple-500 transition-all duration-300"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;