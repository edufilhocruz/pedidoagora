import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Cards from '../CardsRestaurantes';
import CardsPromocoes from '../PagePromocoes/CardsPromocoes';
import SideBarHeader from '../SideBarHeader';

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

      <div className="mt-16">
        <SideBarHeader/>
      </div>

      <div className="mt-10">
        <h2 className="text-[#3C2F2F] font-['Carter_One'] text-[24px] leading-tight text-center mb-10">
          As Melhores Promoções você Encontra Aqui!
        </h2>
        <hr className="my-10 border-t-2 border-gray-300"></hr>
      </div>
      <div className="">
        <CardsPromocoes/>
      </div>
    </section>
  );
}