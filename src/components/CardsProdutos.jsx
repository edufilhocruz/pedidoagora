'use client';

import Link from "next/link";


export default function CardsProduto(){
    const items = [
    {
        id:'customize-cheeseburger',
        name: 'Cheeseburger',
        description: 'Dupla carne e Mais Suculento',
        price: 'R$ 14,90',
        image: '/images/cheeseburger.png',
    },
    {
        id:'customize-cheeseburger',
        name: 'Combo Hamburguer',
        description: 'Sabor duplo e suculento',
        price: 'R$ 22,90',
        image: '/images/combo-hamburger.png',
    },
    ];

    return(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  ">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="p-12 flex flex-col justify-center items-center h-[300px]"
                    > 
                    <div className="flex flex-col items-center pb-4 p-2 bg-amber-200/20 rounded-2xl border border-amber-200">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="mb-4"
                        width={100}
                        height={100}
                        />
                        <div className="text-center">
                        <h3 className="text-[#3C2F2F] font-['Carter_One'] text-[24px] leading-tight">
                            {item.name}
                        </h3>
                        <p className="text-[#3C2F2F] font-['RocknRoll_One'] text-[16px]">
                            {item.description}
                        </p>
                        </div>
                        <div className="mt-4">
                        <Link key={index} href={`/${item.id}`}>
                            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
                                {item.price}
                            </button>
                        </Link> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}