import React, { createContext, useContext, useState } from 'react';

const HistoryContext = createContext();

export const usePreviousURL = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const updateHistory = (url) => {
    setHistory((prevHistory) => [...prevHistory, url]);
  };

  return (
    <HistoryContext.Provider value={{ history, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
