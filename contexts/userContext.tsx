import React, {
  useState, createContext, FC, ReactNode
} from 'react';

type UserContextTypes = {
    user: boolean;
    setUser: (user: boolean) => void;
}

export const UserContext = createContext<UserContextTypes>({
  user: false,
  setUser: () => {},
});

export const UserContextProvider: FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};