import React from 'react';
import { Home, Heart, Users, MapPin, MessageSquare } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'donate', label: 'Donate', icon: Heart },
    { id: 'volunteer', label: 'Volunteer', icon: Users },
    { id: 'crises', label: 'Crises', icon: MapPin },
    { id: 'community', label: 'Community', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center p-2 min-w-0 flex-1 ${
              currentPage === id
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            } transition-colors`}
          >
            <Icon className={`w-5 h-5 ${currentPage === id ? 'text-blue-600' : ''}`} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}