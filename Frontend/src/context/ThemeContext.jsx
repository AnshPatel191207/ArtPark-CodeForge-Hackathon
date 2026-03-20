import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('skillpath-theme') || 'dark';
  });
  const [revealPosition, setRevealPosition] = useState({ x: 0, y: 0 });
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    localStorage.setItem('skillpath-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = (e) => {
    const x = e?.clientX || window.innerWidth / 2;
    const y = e?.clientY || window.innerHeight / 2;
    setRevealPosition({ x, y });
    
    setIsRevealing(true);
    // Switch theme after a slight delay to allow animation to start
    setTimeout(() => {
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    }, 150);
    
    setTimeout(() => {
      setIsRevealing(false);
    }, 800);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRevealing, revealPosition }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
