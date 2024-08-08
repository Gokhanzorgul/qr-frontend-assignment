import { createContext, useContext } from 'react';

export const GlobalContext = createContext({
  selectedPageIndex: 0,
  setSelectedPageIndex: (value: number) => { }
})
