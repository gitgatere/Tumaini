import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import DonationsHub from './pages/DonationsHub';
import VolunteerMarketplace from './pages/VolunteerMarketplace';
import CrisisMap from './pages/CrisisMap';
import AdvocacyToolkit from './pages/AdvocacyToolkit';
import LearningCenter from './pages/LearningCenter';
import Community from './pages/Community';
import Profile from './pages/Profile';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState('welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onContinue={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'donate':
        return <DonationsHub />;
      case 'volunteer':
        return <VolunteerMarketplace />;
      case 'crises':
        return <CrisisMap />;
      case 'advocacy':
        return <AdvocacyToolkit />;
      case 'learn':
        return <LearningCenter />;
      case 'community':
        return <Community />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  if (currentPage === 'welcome' && !user) {
    return <WelcomePage onContinue={() => setCurrentPage('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;