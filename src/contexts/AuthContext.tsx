import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  isGuest: boolean;
  avatar?: string;
  causes: string[];
  totalDonated: number;
  volunteerHours: number;
  badges: string[];
}

interface AuthContextType {
  user: User | null;
  login: (userData: Partial<User>) => void;
  logout: () => void;
  continueAsGuest: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: Partial<User>) => {
    setUser({
      id: userData.id || '1',
      name: userData.name || 'John Doe',
      email: userData.email || 'john@example.com',
      isGuest: false,
      causes: userData.causes || ['refugees', 'children'],
      totalDonated: userData.totalDonated || 250,
      volunteerHours: userData.volunteerHours || 12,
      badges: userData.badges || ['First Donation', 'Volunteer']
    });
  };

  const continueAsGuest = () => {
    setUser({
      id: 'guest',
      name: 'Guest User',
      email: '',
      isGuest: true,
      causes: [],
      totalDonated: 0,
      volunteerHours: 0,
      badges: []
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}