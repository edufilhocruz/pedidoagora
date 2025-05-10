import React from 'react';

// Componente para o ícone de busca (SVG)
// Você pode usar um ícone da biblioteca Heroicons ou qualquer outro SVG de sua preferência.
const SearchIcon = () => (
  <svg
    className="h-5 w-5 text-gray-500" // Cor e tamanho do ícone
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
      clipRule="evenodd"
    />
  </svg>
);

export default function SearchBar() {
  return (
    <div className="absolute left-[435px] top-[199px] w-[589px] h-[58px]
                    bg-white shadow-md rounded-lg
                    flex items-center
                    px-4 space-x-3">{/* Padding e espaçamento para o ícone */}
      
      {/* Ícone de Busca */}
      <SearchIcon />

      {/* Campo de Input */}
      <input
        type="text"
        placeholder="Buscar pratos, estabelecimentos..." // Texto de exemplo do iFood
        className="flex-1 h-full // Ocupa o espaço restante e altura total
                   font-['Quicksand'] text-base text-gray-700 // Fonte, tamanho e cor do texto digitado
                   placeholder-gray-500 // Cor do texto do placeholder
                   bg-transparent // Fundo transparente, pois o div pai já tem cor
                   outline-none" // Remove a borda de foco padrão
      />
    </div>
  );
}