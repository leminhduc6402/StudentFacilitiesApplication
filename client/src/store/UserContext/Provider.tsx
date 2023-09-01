import { useEffect, useState } from 'react';
import { Context, User, initialUser } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLocalStorage from '../../hook/useLocalStorage';

function UserProvider({ children }: React.PropsWithChildren) {
  const { dataSync, getData } = useLocalStorage();
  const [user, setUser] = useState<any>(initialUser);

  useEffect(() => {
    getData('user');
  }, []);

  useEffect(() => {
    setUser(dataSync.user);
  }, [dataSync.user]);

  return (
    <Context.Provider value={[user, setUser] as any}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;
