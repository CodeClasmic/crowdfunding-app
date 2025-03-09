import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXBjFT1G31LW3TbWbI4Xvexb1Cv9AqmiQ",
  authDomain: "crowdfunding-42865.firebaseapp.com",
  projectId: "crowdfunding-42865",
  storageBucket: "crowdfunding-42865.appspot.com", // ✅ Corrected here
  messagingSenderId: "21283188009",
  appId: "1:21283188009:web:387bf5dea665c88c685b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


