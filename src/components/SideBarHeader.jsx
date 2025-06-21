'use client';

import Image from 'next/image';

export default function SideBarHeader (){
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
    return(
        <div>
                <div className='p-2 gap-5 grid-cols-2  grid md:grid-cols-3 lg:grid-cols-6 justify-center items-center'>
                    {/* <CardContent className=" gap-5 sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-6 justify-center items-center"> */}
                    {items.map((item, index)=> (
                        <div
                        key={index}
                        className='m-2 lg:m-0 '>
                            <div className=" flex justify-center items-center  bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 delay-50 hover:scale-105">
                                <Image
                                src={item.image}
                                alt={item.nome}
                                width={50}
                                height={50}
                                className=" object-cover rounded-lg"
                                />
                                <p className="text-[#3C2F2F] font-['RocknRoll_One'] text-[16px] text-center mt-2">{item.nome}</p>
                                </div>
                            </div>
                    ))}
                </div>
        </div>
    )
};