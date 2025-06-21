'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Image from 'next/image';
import SideBarHeader from '../components/SideBarHeader';

export default function Cards(){
        const items = [
    {
        nome: 'Restaurantes',
        image: '/images/Restaurantes.png',

    },
    {
        nome: 'Mercado',
        image: '/images/Mercado.png',
    },
    {
        nome: 'Farmácia',
        image: '/images/Farmácia.png',
    },
    {
        nome: 'Pet',
        image:'/images/Pet.png',
    },
    {
        nome: 'Bebidas',
        image: '/images/Bebidas.png',
    },
    {
        nome: 'Shopping',
        image: '/images/Shopping.png',
    }
];

    const cardPromo = [
    {
        nome: 'Restaurantes de entrega Grátis',
        image: '/images/RestauranteComEntregaGratis.jpeg',
    },
    {
        nome: 'Restaurantes com Cupom a partir de R$ 5,00',
        image: '/images/RestaurantesComCupomde5Reais.jpeg',
    },
    {
        nome: 'Volta às Aulas no Pedido Agora Shopping',
        image: '/images/VoltaasAulasIfood.jpeg',
    }
]

    return (
        <div>
            <section className="grid justify-center items-center">
                <SideBarHeader/>
            <section/>

            <section>
                <CardContent className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center items-center'>
                    {cardPromo.map((item, index)=>(
                        <div
                        key={index}>
                            <div>
                                <img 
                                src={item.image} 
                                alt={item.nome}
                                width={350}
                                height={350} 
                                className='rounded-lg'/>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </section>

            </section>

            <div className=' m-2 p-3 items-center justify-center flex flex-col'>
                <p className='font-bold text-xl'>Os melhores Restaurantes da Região</p>
            </div>

            <section className='flex-1 items-center justify-center flex flex-wrap mt-2'>

            <Card className='w-52 h-24 border-2 border-gray-200 hover:shadow-lg transition duration-300 delay-50 hover:scale-105 rounded-lg m-2'>
                <Link href="/popularItems">
                <CardContent className=''>
                    <div className='flex gap-6 mt-2 items-center justify-center'>
                    <img 
                    src="/images/LogoMcDonald.jpeg" 
                    alt="logomcdonald"
                    width={40}
                    height={40}
                    className='rounded-full ' />
                    <p className="text-[#3C2F2F] font-['RocknRoll_One'] text-[16px]">Mc donald's</p>
                    </div>
                </CardContent>
                </Link>
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
                    <p className="mt-2 mx-10 text-[#3C2F2F] font-['RocknRoll_One'] text-[16px]">Sushi</p>
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
                    <p className="md:mr-4  text-[#3C2F2F] font-['RocknRoll_One'] text-[16px]">Burguer King</p>
                </div>
                </CardContent>
            </Card>
            </section>
        </div>
    )
}