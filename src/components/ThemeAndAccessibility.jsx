'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ThemeAndAccessibility() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
      > 
        {isDarkMode ?  <SunIcon className='w-7 h-7'/>  :  <MoonIcon className='w-7 h-7'/>  } 
      </button>
    </div>
  );
}