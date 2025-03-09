// src/utils/firebaseUtils.ts

// Function to create a campaign (without Firestore)
export const createCampaign = async (
    title: string,
    description: string,
    target: number,
    deadline: number,
    image: string,
    owner: string // owner is the wallet address of the user creating the campaign
  ): Promise<void> => {
    try {
      // Simply log the campaign creation details, you can replace this with other logic
      console.log('Creating campaign with the following details:');
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Target:', target);
      console.log('Deadline:', deadline);
      console.log('Image:', image);
      console.log('Owner:', owner);
  
      // Logic to handle the campaign creation (e.g., storing locally, calling a smart contract, etc.)
      // Currently, we're just logging the details to the console for now
  
    } catch (error) {
      console.error('Error creating campaign:', error);
      throw new Error('Error creating campaign');
    }
  };
  