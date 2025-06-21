'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Image from 'next/image';

export default function Cards() {
  const items = [
    { nome: 'Restaurantes', image: '/images/Restaurantes.png' },
    { nome: 'Mercado', image: '/images/Mercado.png' },
    { nome: 'Farmácia', image: '/images/Farmácia.png' },
    { nome: 'Pet', image: '/images/Pet.png' },
    { nome: 'Bebidas', image: '/images/Bebidas.png' },
    { nome: 'Shopping', image: '/images/Shopping.png' },
  ];

  const cardPromo = [
    { nome: 'Restaurantes de entrega Grátis', image: '/images/RestauranteComEntregaGratis.jpeg' },
    { nome: 'Restaurantes com Cupom a partir de R$ 5,00', image: '/images/RestaurantesComCupomde5Reais.jpeg' },
    { nome: 'Volta às Aulas no Pedido Agora Shopping', image: '/images/VoltaasAulasIfood.jpeg' },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-white text-[#3C2F2F] dark:text-black">
      {/* Categoria de ícones */}
      <section className="grid justify-center items-center">
        <div className="p-2 gap-5 grid-cols-2 grid md:grid-cols-3 lg:grid-cols-6 justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="m-2 lg:m-0">
              <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.nome}
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="font-['RocknRoll_One'] text-[16px] text-center mt-2">{item.nome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards promocionais */}
      <section>
        <CardContent className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center items-center">
          {cardPromo.map((item, index) => (
            <div key={index}>
              <div>
                <img
                  src={item.image}
                  alt={item.nome}
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </section>

      {/* Título */}
      <div className="dark:text-white m-2 p-3 items-center justify-center flex flex-col">
        <p className="font-bold text-xl">Os melhores Restaurantes da Região</p>
      </div>

      {/* Cards de restaurantes */}
      <section className="flex-1 items-center justify-center flex flex-wrap mt-2">
        <Card className="w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2 bg-white">
          <Link href="/popularItems">
            <CardContent>
              <div className="flex gap-6 mt-2 items-center justify-center">
                <img
                  src="/images/LogoMcDonald.jpeg"
                  alt="McDonald's"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="font-['RocknRoll_One'] text-[16px]">Mc Donald's</p>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2 bg-white">
          <CardContent>
            <div className="flex items-center justify-center">
              <img
                src="/images/Sushilogo.jpeg"
                alt="Sushi"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="mt-2 mx-10 font-['RocknRoll_One'] text-[16px]">Sushi</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2 bg-white">
          <CardContent>
            <div className="pt-2 flex gap-4 items-center justify-center">
              <img
                src="/images/Burguerking.png"
                alt="Burguer King"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="md:mr-4 font-['RocknRoll_One'] text-[16px]">Burguer King</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
