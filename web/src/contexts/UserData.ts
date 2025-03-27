import { useContext, createContext } from 'react';

export type UserType = {
  username: string,
  first_name: string,
  last_name: string;
};

type UserDataContextType = {
  user?: UserType;
  setUser: (user: UserType | undefined) => void;
};

export const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const useUserData = () => {
  const { user, setUser } = useContext(UserDataContext) as UserDataContextType;

  return {
    user: {
      ...user,
      ...( {}),
    },
    setUser,
  };
};
