import { useReducer, useState } from 'react';
import { Context } from './Context';
import { reducer } from './reducer';

function HistoryProvider({ children }: React.PropsWithChildren) {
  const [historyNav, dispatch] = useReducer(reducer, []);
  return (
    <Context.Provider value={[historyNav, dispatch] as any}>
      {children}
    </Context.Provider>
  );
}

export default HistoryProvider;
