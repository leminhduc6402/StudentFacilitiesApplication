import { UserContext } from '../../store/UserContext';
import { useContext } from 'react';

function useUserContext() {
  const [user, setUser]: any = useContext(UserContext);
  return [user, setUser];
}

export default useUserContext;