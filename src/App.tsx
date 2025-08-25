import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import InsuranceMarketplace from './pages/InsuranceMarketplace';
import HealthVault from './pages/HealthVault';
import UserProfile from './pages/UserProfile';
import HospitalDoctor from './pages/HospitalDoctor';
import Pharmacy from './pages/Pharmacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/insurance" element={<InsuranceMarketplace />} />
          <Route path="/health-vault" element={<HealthVault />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/hospitals" element={<HospitalDoctor />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;