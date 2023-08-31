import { createContext } from 'react';

export const initialValue = {
  value: 1,
};

export interface Value {
  value: any;
}

const Context = createContext<Value>(initialValue as Value);

export { Context };
