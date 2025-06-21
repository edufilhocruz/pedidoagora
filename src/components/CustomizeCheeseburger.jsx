'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CustomizeCheeseburger() {
  const [portion, setPortion] = useState(1);
  const [spiciness, setSpiciness] = useState(80);
  const [extras, setExtras] = useState({
    tomato: 0,
    onion: 0,
    pickles: 0,
    bacon: 0,
    fries: 0,
    lettuce: 0,
    onionRings: 0,
  });

  const extraItems = [
    { name: 'Tomate', key: 'tomato', image: '/images/tomato.png' },
    { name: 'Cebola', key: 'onion', image: '/images/onion.png' },
    { name: 'Picles', key: 'pickles', image: '/images/pickles.png' },
    { name: 'Bacon', key: 'bacon', image: '/images/bacon.png' },
    { name: 'Batata Frita', key: 'fries', image: '/images/fries.png' },
    { name: 'Alface', key: 'lettuce', image: '/images/lettuce.png' },
    { name: 'Onion Rings', key: 'onionRings', image: '/images/onion-rings.png' },
  ];

  return (
    // Fundo claro fixo, que não muda com dark mode
    <div className="min-h-screen bg-[url('/images/fundo-claro.png')] bg-cover bg-center dark:bg-none dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-[120px] flex flex-col gap-12">
        {/* Grid principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Esquerda */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <Image
              src="/images/cheeseburger-exploded.png"
              alt="Hambúrguer Explodido"
              width={300}
              height={416}
              className="rounded-[85px] object-cover mb-6"
            />
          </div>

          {/* Direita */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-[#3C2F2F] dark:text-white dark:drop-shadow-[0_0_10px_rgb(255, 0, 0)] font-['RocknRoll_One'] text-[28px] sm:text-[32px] leading-[48px] transition-colors">
              Personalize seu hambúrguer ao seu gosto.
            </h2>

            {/* Picância */}
            <div className="space-y-3">
              <span className="text-[#3C2F2F] dark:text-white dark:drop-shadow-[0_0_10px_rgb(255, 0, 0)] font-['Roboto'] text-[24px] sm:text-[28px]">
                Picante
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={spiciness}
                onChange={(e) => setSpiciness(e.target.value)}
                className="w-full h-[12px] rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #EF2A39 ${spiciness}%, #E5E7EB ${spiciness}%)`,
                }}
              />
              <div className="flex justify-between text-[16px] font-['Roboto'] max-w-md">
                <span className="text-[#1CC019]">Moderado</span>
                <span className="text-[#EF2A39]">Hot</span>
              </div>
            </div>

            {/* Porção */}
            <div className="space-y-3">
              <span className="text-[#3C2F2F] dark:text-white dark:drop-shadow-[0_0_10px_rgb(255, 0, 0)] font-['Roboto'] text-[24px] sm:text-[28px]">
                Porção
              </span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setPortion((p) => Math.max(1, p - 1))}
                  className="bg-[#FFEA99] rounded-[10px] dark:bg-white shadow-md w-16 h-16 text-[#C11E1E] text-3xl font-bold"
                >
                  -
                </button>
                <span className="text-[#3C2F2F] dark:text-red-600 dark:drop-shadow-[0_0_10px_rgb(255, 0, 0)] font-['Inter'] text-[36px] w-12 text-center">
                  {portion}
                </span>
                <button
                  onClick={() => setPortion((p) => p + 1)}
                  className="bg-[#FFEA99] dark:bg-white  rounded-[10px] shadow-md w-16 h-16 text-[#C11E1E] text-3xl font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Adicionais */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#3C2F2F] dark:text-white font-['Roboto'] font-semibold text-[24px] sm:text-[28px] leading-[38px]">
            Adicionais
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-2">
            {extraItems.map((item) => (
              <div
                key={item.key}
                className="w-full rounded-[15px] shadow-lg overflow-hidden bg-white flex flex-col"
              >
                <div className="p-2 h-[120px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#3C2F2F] p-3 flex-grow flex flex-col items-center justify-between text-center">
                  <span className="text-white font-['Roboto'] text-[16px] mb-2">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setExtras((prev) => ({
                          ...prev,
                          [item.key]: Math.max(0, prev[item.key] - 1),
                        }))
                      }
                      className="bg-[#EF2A39] text-white rounded-full w-6 h-6 text-sm font-bold flex items-center justify-center"
                    >
                      –
                    </button>
                    <span className="text-white text-sm font-medium w-4 text-center">
                      {extras[item.key]}
                    </span>
                    <button
                      onClick={() =>
                        setExtras((prev) => ({
                          ...prev,
                          [item.key]: prev[item.key] + 1,
                        }))
                      }
                      className="bg-[#EF2A39] text-white rounded-full w-6 h-6 text-sm font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
