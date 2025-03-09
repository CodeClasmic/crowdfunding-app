import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ExploreCampaign from './pages/Explorecampaign'; 
import CreateCampaign from './pages/CreateCampaign';
import MyCampaigns from './pages/MyCampaigns';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<ExploreCampaign />} /> 
                <Route path="/create-campaign" element={<CreateCampaign />} /> 
                <Route path="/my-campaigns" element={<MyCampaigns />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
