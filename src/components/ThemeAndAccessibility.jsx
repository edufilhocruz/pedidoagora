'use client';
import { useState, useEffect } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function ThemeAndAccessibility() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

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

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black shadow-lg hover:scale-105 transition"
        title="Acessibilidade"
      >
        <Cog6ToothIcon className="w-6 h-6" />
      </button>

      {open && (
        <div className="absolute bottom-14 right-0 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md p-4 space-y-2 w-48 animate-fadeIn">
          <button
            onClick={toggleDarkMode}
            className="w-full px-3 py-1 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? '☀ Modo Claro' : '🌙 Modo Escuro'}
          </button>
          <button
            onClick={toggleHighContrast}
            className="w-full px-3 py-1 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {highContrast ? 'Contraste normal' : '🔆 Contraste alto'}
          </button>
          <div className="flex justify-between">
            <button
              onClick={increaseFontSize}
              className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
            >
              A+
            </button>
            <button
              onClick={decreaseFontSize}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              A-
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
