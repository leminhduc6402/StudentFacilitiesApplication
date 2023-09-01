import { useEffect, useState } from 'react';
import { Context } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLocalStorage from '../../hook/useLocalStorage';

function LocalStorageProvider({ children }: React.PropsWithChildren) {
  const [dataSync, setDataSync] = useState({});

  return (
    <Context.Provider value={[dataSync, setDataSync] as any}>
      {children}
    </Context.Provider>
  );
}

export default LocalStorageProvider;
