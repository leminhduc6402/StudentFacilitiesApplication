import { useState } from 'react';
import { Context, User } from './Context';

function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User>({
    fullName: '',
    id: '',
    role: 'STUDENT',
    studentCode: '',
    userCourse: '',
    username: '',
  });
  return (
    <Context.Provider value={[user, setUser] as any}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;
