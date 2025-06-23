'use client';

import { useState } from 'react';

// Ícone de busca (Heroicon)
const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
    </svg>
);

export default function SearchBar() {
  // Estado para guardar o que o usuário digita
  const [searchTerm, setSearchTerm] = useState('');

  return (
    // Layout responsivo: centralizado e com largura máxima
    <div className="w-full max-w-2xl mx-auto">
      
      {/* Container do input e do ícone, agora ocupando toda a largura */}
      <div className="flex items-center w-full px-4 py-3 space-x-3 bg-white rounded-full shadow-md">
        <SearchIcon />
        <input
          type="text"
          placeholder="Buscar pratos, estabelecimentos..."
          className="w-full h-full font-['Quicksand'] text-base text-gray-700 placeholder-gray-500 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
