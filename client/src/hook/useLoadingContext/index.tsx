import { LoadingContext } from '../../store/LoadingContext';
import { useContext } from 'react';

function useLoadingContext() {
  const [loading, setLoading]: any = useContext(LoadingContext);
  return [loading, setLoading];
}

export default useLoadingContext;
