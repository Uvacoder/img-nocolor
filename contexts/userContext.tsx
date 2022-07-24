import React, {
  useState, createContext, FC, ReactNode
} from 'react';
import { useTheme } from 'next-themes';

import { UserContextTypes } from './userContextTypes';

export const UserContext = createContext<UserContextTypes>({
  user: false,
  setUser: () => {},
  theme: 'dark',
  setTheme: () => {}
});

export const UserContextProvider: FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        theme,
        setTheme
      }}
    >
      {children}
    </UserContext.Provider>
  );
};