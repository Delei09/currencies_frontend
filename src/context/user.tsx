import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

import { URL_BASE } from '../constants';
import { User } from '../types';

export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>(null as any);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const updateRefreshToken = async () => {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const { data } = await axios.post(`${URL_BASE}/auth/refresh`, {
            refreshToken: refreshToken,
          });
          console.log(data);
          setUser(data.user);
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
        } catch (error) {
          setUser(null);
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('access_token');
          window.location.href = '/login';
        }
        return;
      }
      window.location.href = '/login';
    };

    if (!user && accessToken) updateRefreshToken();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
