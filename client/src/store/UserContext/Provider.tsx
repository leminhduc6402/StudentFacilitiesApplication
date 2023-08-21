import { useState } from 'react';
import { Context } from './Context';

function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={[user, setUser] as any}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;
