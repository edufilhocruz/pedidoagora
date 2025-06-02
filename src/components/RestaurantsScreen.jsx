'use client';

import Image from 'next/image';
import Header from './Header';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';



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
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-3">
            <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
            <input
              type="text"
              placeholder="Para onde devemos entregar?"
              className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-900 text-base md:text-lg"
            />
          </div>
          <button className="mt-4 w-28 bg-red-600 text-white font-semibold py-4 rounded-full hover:bg-red-700 transition-colors">
            Buscar
          </button>
        </div>
        {/* Cards de Restaurantes */}
        <section className='grid m-auto lg:grid-cols-3 md:grid-cols-2 mt-10'>
          <CardContent className="p-6">
            <div className="">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105">
                <Image
                  src="/images/Comidaitaliana.jpeg"
                  alt="Restaurante Exemplo"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="text-xl font-light text-gray-500 mt-2 text-center">Restaurantes</p>
              </div>
            </div>
          </CardContent>


          <CardContent className="p-6">
            <div className="">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 ">
                <Image
                  src="/images/Mercado.jpeg"
                  alt="Restaurante Exemplo"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="text-xl font-light text-gray-500 mt-2 text-center">Mercado</p>
              </div>
            </div>
          </CardContent>


          <CardContent className="p-6">
            <div className="">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 ">
                <Image
                  src="/images/Acai.jpeg"
                  alt="Restaurante Exemplo"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <p className="text-xl font-light text-gray-500 mt-2 text-center">Açai</p>
              </div>
            </div>
          </CardContent>


        </section>
          <div className=' m-2 p-3 items-center justify-center flex flex-col'>
            <p className='font-bold text-xl'>Os melhores Restaurantes</p>
          </div>

          <section className='flex-1 items-center justify-center flex flex-wrap mt-2'>

          <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className='p-6 '>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
                <img src="/images/LogoMcDonald.jpeg" alt="logomcdonald" className='w-10 h-10 mt-2 rounded-full ' />
                <p className='mt-2 font-extralight'>Mc donald's</p>
              </div>
            </CardContent>
          </Card>


            <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
                <img src="/images/Sushilogo.jpeg" alt="logomcdonald" className='lg:w-13 lg:h-13 md:h-12 mt-2 rounded-full ' />
                <p className='mt-2 font-extralight'>Sushi</p>
              </div>
            </CardContent>
          </Card>
            

            <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
                <img src="/images/Burguerking.png" alt="logomcdonald" className='w-13 h-13 mt-2 md:h-12 rounded-full ' />
                <p className='mt-2 font-extralight'>Burguer King</p>
              </div>
            </CardContent>
          </Card>
          </section>
      </main>
    </div>
  );
}