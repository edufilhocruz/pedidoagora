'use client';

import Image from 'next/image';
import Header from './Header';
import { MapPinIcon } from '@heroicons/react/24/outline';
import CardsRestaurantes from './CardsRestaurantes';

export default function RestaurantsScreen() {



  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative">
      <Header />
      <main className="relative max-w-[1440px] mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-red-700 text-center mb-6">
          Bateu a fome? Peça Agora, chega já!
        </h1>

        {/* Barra de Pesquisa (estilo iFood) */}
        <div className="grid md:grid-cols-1 gap-2 max-w-xl mx-auto w-full">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-5 py-2">
            <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
            <input
              type="text"
              placeholder="Para onde devemos entregar?"
              className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-900 text-base md:text-lg"
            />
            <div>
              <button className=" w-24 bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>
        {/* Cards de Restaurantes */}
        <CardsRestaurantes />
      </main>
    </div>
  );
}