import { useState } from 'react';
import { Context } from './Context';

function DropdownProvider({ children }: React.PropsWithChildren) {
  const [currentValueTop, setCurrentValueTop] = useState(null);
  const [currentValueBottom, setCurrentValueBottom] = useState(null);

  return (
    <Context.Provider
      value={
        [
          currentValueTop,
          setCurrentValueTop,
          currentValueBottom,
          setCurrentValueBottom,
        ] as any
      }
    >
      {children}
    </Context.Provider>
  );
}

export default DropdownProvider;
