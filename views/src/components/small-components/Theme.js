import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  // Create a new context object
  theme: 'light', // Default theme
  setTheme: () => {}, // Will be replaced with the toggle theme function
});

export const ThemeProvider = ({ children }) => {
  // Define the theme state using useState and intiailise with the localstorage value or default value (light)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Using useEffect hook to apply theme to website & save to local storage when it changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to switch between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
      // Provide the theme state and toggleTheme function
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
  );

};
