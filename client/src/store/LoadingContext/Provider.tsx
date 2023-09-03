import { useState } from 'react';
import { Context } from './Context';

function LoadingProvider({ children }: React.PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Context.Provider value={[loading, setLoading] as any}>
      {children}
    </Context.Provider>
  );
}

export default LoadingProvider;
