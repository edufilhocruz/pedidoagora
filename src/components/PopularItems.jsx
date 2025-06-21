import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Cards from './CardsRestaurantes';
import CardsProduto from './CardsProdutos';

export default function PopularItems() {

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Barra de Pesquisa */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar no cardápio..."
            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder:text-sm"
          />
          
        </div>
        <div className='ml-4'>
          <button className=" w-24 bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-center dark:text-white text-[#1F1F1F] font-['Quicksand'] text-[20px] mb-10">
        Top 1 mais vendidos - o melhor do nosso cardápio!
      </h2>

      {/* Cards de Produtos */}
      <CardsProduto />
    </section>
  );
}