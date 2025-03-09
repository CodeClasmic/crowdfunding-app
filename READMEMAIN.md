Here is a detailed README file for your Crowdfunding App:

---

# Crowdfunding App

A decentralized crowdfunding platform built on Ethereum that allows users to create campaigns, contribute funds, and manage their donations. This platform leverages the security and transparency of blockchain technology to facilitate trustless transactions between donors and campaign creators.

## Features

- **Create Campaigns**: Users can create crowdfunding campaigns by providing essential details like title, description, target amount, deadline, and an image URL.
- **Donate to Campaigns**: Users can donate ETH to support active campaigns.
- **Wallet Integration**: The app integrates with MetaMask for Ethereum wallet management, allowing users to connect their wallets to the app.
- **Blockchain-Powered**: The app uses Ethereum smart contracts to handle the donation process securely.
- **Campaign Management**: Campaign details, including donations, are stored and managed in Firebase Firestore.
- **Sepolia Testnet**: The app is connected to Ethereum's Sepolia testnet, allowing you to test the platform with real cryptocurrency transactions without using actual funds.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Blockchain**: Ethereum (Sepolia testnet), MetaMask for wallet integration, Smart Contracts for managing donations
- **Backend**: Firebase (Firestore) for storing campaign data
- **Tools**: Vite for project bundling, Hardhat for Ethereum smart contract development







   
4. **Configure Ethereum Smart Contract**

   Deploy the smart contract to the Sepolia testnet using a tool like Hardhat. Update your smart contract address and ABI in the frontend.

5. **Run the App**

   After setting up everything, you can run the app locally:

   ```bash
   npm run dev
   ```

   This will start the app on [http://localhost:3000](http://localhost:3000).

### MetaMask Configuration

To interact with the blockchain, make sure you have **MetaMask** installed and configured with the Sepolia testnet.

- **Switch to Sepolia Testnet**: In MetaMask, change the network to Sepolia.
- **Connect Wallet**: Once the app is running, click on the "Connect Wallet" button in the header to link your MetaMask wallet.

## Usage

1. **Creating a Campaign**: 
   - Click the "Create Campaign" button to begin the campaign creation process.
   - Enter details like the campaign title, description, target amount (in ETH), deadline (in timestamp format), and campaign image URL.
   - Submit the form to create the campaign.

2. **Donating to a Campaign**: 
   - On the "Explore Campaign" page, view available campaigns.
   - Select a campaign and click the "Donate" button to contribute funds to the campaign.
   - You will be prompted to confirm the transaction through MetaMask.

3. **View Campaign Details**: 
   - Users can see details about the campaign, including the total amount collected and the donation list.

4. **Smart Contract**:
   - The smart contract handles the donation process by storing funds in the contract and ensuring transparency in fund distribution.



## Smart Contract

The Ethereum smart contract facilitates the donation process by managing the funds securely. The contract includes functions like:

- **createCampaign()**: Creates a new campaign.
- **donate()**: Allows users to donate to the campaign.
- **getCampaignDetails()**: Retrieves details of a campaign.

## Contributing

If you would like to contribute to the development of this app, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.





This README provides detailed instructions on setting up, running, and contributing to the Crowdfunding App project.
