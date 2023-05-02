import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  const isDarkTheme = storedDarkMode || prefersDarkMode;
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
