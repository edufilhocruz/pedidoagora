'use client';

import { useEffect, useState } from 'react';

export default function ThemeAndAccessibility() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100); // em %

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleHighContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    document.documentElement.classList.toggle('high-contrast', newContrast);
  };

  const increaseFontSize = () => {
    const newSize = fontSize + 10;
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(80, fontSize - 10);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  // Reset para garantir que a fonte seja aplicada na primeira renderização
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-md shadow-lg">
      <button
        onClick={toggleDarkMode}
        className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <button
        onClick={toggleHighContrast}
        className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {highContrast ? 'Contraste Normal' : 'Contraste Alto'}
      </button>
      <div className="flex space-x-2">
        <button
          onClick={increaseFontSize}
          className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          A-
        </button>
      </div>
    </div>
  );
}
