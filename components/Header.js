import React from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
  // Using the useTheme hook from next-themes to access and set the current theme
  const { theme, setTheme } = useTheme();

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Application</h1>
        {/* Displaying the current theme mode to the user */}
        <div>
          <p>Current Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
          {/* Toggle button for switching themes */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;