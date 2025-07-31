import React, { useState } from 'react';
import { Heart, Menu, X, Globe, User, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    onNavigate('welcome');
    setShowProfile(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('dashboard')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:from-blue-700 group-hover:to-blue-800 transition-colors">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Tumaini</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('donate')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Donate
            </button>
            <button 
              onClick={() => onNavigate('volunteer')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Volunteer
            </button>
            <button 
              onClick={() => onNavigate('advocacy')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Advocate
            </button>
            <button 
              onClick={() => onNavigate('crises')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Crisis Map
            </button>
            <button 
              onClick={() => onNavigate('learn')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Learn
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {user && (
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            )}
            
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Globe className="w-5 h-5" />
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {user.isGuest ? 'Guest' : user.name}
                  </span>
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    <button 
                      onClick={() => {
                        onNavigate('profile');
                        setShowProfile(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('welcome')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  onNavigate('donate');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Donate
              </button>
              <button 
                onClick={() => {
                  onNavigate('volunteer');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Volunteer
              </button>
              <button 
                onClick={() => {
                  onNavigate('advocacy');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Advocate
              </button>
              <button 
                onClick={() => {
                  onNavigate('crises');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Crisis Map
              </button>
              <button 
                onClick={() => {
                  onNavigate('learn');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Learn
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}