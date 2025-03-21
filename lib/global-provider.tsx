import { createContext, ReactNode, useContext } from 'react';

import { getUser } from './appwrite';
import { useAppwrite } from './useAppwrite';

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParam?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: { children: ReactNode }) {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getUser,
  });

  const isLoggedIn = !!user;
  console.log(JSON.stringify(user, null, 2));

  return (
    <GlobalContext.Provider value={{ user, loading, refetch, isLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContect = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within a global provider');
  }

  return context;
};

export default GlobalProvider;
