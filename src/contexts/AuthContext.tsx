import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';

import { auth, db } from '@/firebase/config';
import type { OrganizerProfileData } from '@/types/organizerTypes';

interface AuthContextType {
  user: User | null;
  organizerProfile: OrganizerProfileData | null;
  loading: boolean;
  isAuthenticated: boolean;
  isOrganizer: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [organizerProfile, setOrganizerProfile] = useState<OrganizerProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        // Check if user is an organizer
        try {
          const organizerRef = doc(db, 'organizers', user.uid);
          const docSnap = await getDoc(organizerRef);
          
          if (docSnap.exists()) {
            setOrganizerProfile(docSnap.data() as OrganizerProfileData);
          } else {
            setOrganizerProfile(null);
          }
        } catch (error) {
          console.error('Error fetching organizer profile:', error);
          setOrganizerProfile(null);
        }
      } else {
        setOrganizerProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('auth_token');
      setUser(null);
      setOrganizerProfile(null);
      // Navigation will be handled by the component using this hook
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const value: AuthContextType = {
    user,
    organizerProfile,
    loading,
    isAuthenticated: !!user,
    isOrganizer: !!organizerProfile,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
