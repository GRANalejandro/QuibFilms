import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [variable1, setVariable1] = useState('valorInicial1');
  const [variable2, setVariable2] = useState('valorInicial2');

  return (
    <GlobalContext.Provider value={{ variable1, setVariable1, variable2, setVariable2 }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};