import { useState } from 'react';
import { Context, User, initialUser } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../utils/AsyncStorage';

function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<any>(getData('user') || initialUser);
  return (
    <Context.Provider value={[user, setUser] as any}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;
