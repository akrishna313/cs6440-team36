import isEmpty from 'lodash/isEmpty';
import { useState, useMemo, useEffect, ReactNode } from 'react';
import { type UserType, UserDataContext } from './UserData';

type UserDataProviderProps = {
  children: ReactNode;
};

export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>();

  useEffect(() => {
    const storedState = sessionStorage.getItem('user');
    if (storedState) {
      setUser(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    !isEmpty(user) && sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
