'use client';

import Image from 'next/image';
import Header from './Header';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ThemeAndAccessibility from './ThemeAndAccessibility';



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
        <section className='grid  lg:flex- sm:grid-cols-2  mt-10'>
          <CardContent className=" lg:  sm:w-auto p-6  justify-center items-center flex ">
            <div className="">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105">
                <Image
                  src="/images/Comidaitaliana.jpeg"
                  alt="Restaurante Exemplo"
                  width={300}
                  height={300}
                  className=" xl:w-full xl:h-full lg:w-full lg:h-40 object-cover rounded-lg"
                />
                <p className="text-xl font-light text-gray-500 mt-2 text-center">Restaurantes</p>
              </div>
            </div>
          </CardContent>


          <CardContent className="lg:w-full md: sm:w-auto p-2 justify-center items-center flex ">
            <div className="">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 ">
                <Image
                  src="/images/Mercado.jpeg"
                  alt="Restaurante Exemplo"
                  width={300}
                  height={300}
                  className=" xl:w-full xl:h-full lg:h-40 lg:w-full object-cover rounded-lg"
                />
                <p className="text-xl font-light text-gray-500 mt-2 text-center">Mercado</p>
              </div>
            </div>
          </CardContent>
        <section/>

        </section>

          <div className=' m-2 p-3 items-center justify-center flex flex-col'>
            <p className='font-bold text-xl'>Os melhores Restaurantes</p>
          </div>

          <section className='flex-1 items-center justify-center flex flex-wrap mt-2'>

          <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className=''>
              <div className='flex gap-6 mt-2 items-center justify-center'>
                <img 
                src="/images/LogoMcDonald.jpeg" 
                alt="logomcdonald"
                width={40}
                height={40}
                className='rounded-full ' />
                <p className=' font-extralight'>Mc donald's</p>
              </div>
            </CardContent>
          </Card>


            <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className=''>
              <div className='flex items-center justify-center'>
                <img 
                src="/images/Sushilogo.jpeg" 
                alt="logomcdonald" 
                width={50}
                height={50}
                className='rounded-full'/>
                <p className='mt-2 mx-10 font-extralight'>Sushi</p>
              </div>
            </CardContent>
          </Card>
            

            <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
            <CardContent className=''>
              <div className='pt-2 flex gap-4 items-center justify-center'>
                <img 
                src="/images/Burguerking.png" 
                alt="logomcdonald"
                width={40}
                height={40}
                className='rounded-full ' />
                <p className='md:mr-4 mt-2 font-extralight'>Burguer King</p>
              </div>
            </CardContent>
          </Card>
          </section>
      </main>
    </div>
  );
}