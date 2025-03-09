import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css';  

import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container missing in index.html");
}
const root = ReactDOM.createRoot(container);

root.render(
  
    <ThirdwebProvider activeChain={11155111}> 
      <App />
    </ThirdwebProvider>
  
);
