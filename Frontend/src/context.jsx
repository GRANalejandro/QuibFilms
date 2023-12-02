// context.jsx

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const contextValue = {
    inputValue,
    setInputValue,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
