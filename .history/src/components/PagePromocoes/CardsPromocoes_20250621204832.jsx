
import Link from "next/link";


export default function CardsPromocoes(){
    const items = [
    {
        id:'customize-cheeseburger',
        name: 'Combo Hamburguer',
        description: 'Hamburguer + Batata Frita + Refrigerante Latinha',
        price: 'R$ 22,90',
        image: '/images/combo-hamburger.png',
    },
    {
        id:'Refrigerante',
        name: 'Refrigerante 2L',
        description: 'Antarctica, Coca-Cola, Sprite, Pepsi',
        price: 'R$ 12,90',
        image: '/images/Refrigerante.png',
    },
    {
        id:'RefrigeranteLata',
        name: 'Refrigerante Latinha',
        description: 'Antarctica, Coca-Cola, Sprite, Pepsi 240ML ',
        price: 'R$ 8,90',
        image: '/images/RefrigeranteLata.png'
    },
    {
        id: 'Whisky',
        name: 'Whisky',
        description: 'RedLabel 1L ',
        price: 'R$ 99,90',
        image: '/images/Whisky.png',
    },
    {
        id: 'RedBull',
        name: 'Redbull',
        description: 'RedBull 240ml ',
        price: 'R$ 19,90',
        image: '/images/Redbull.png',
    },
    {
        id: 'Agua de Coco',
        name: 'Água de Coco',
        description: 'Água de coco 1L ',
        price: 'R$ 29,90',
        image: '/images/aguadecoco.png',
    },
    ];


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
            {items.map((item, index) => (
            <div
            key={index}
            className="flex justify-center items-center"
        > 
            <div className="flex flex-col items-center p-3 bg-amber-200/20 rounded-2xl border border-amber-200 h-full w-full max-w-xs">
                <img
                src={item.image}
                alt={item.name}
                className="mb-3 w-20 h-20 object-contain"
                width={100}
                height={100}
                />
                <div className="text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-[#3C2F2F] font-['Carter_One'] text-[22px] leading-tight mb-1">
                        {item.name}
                    </h3>
                    <p className="text-[#3C2F2F] font-['RocknRoll_One'] text-[15px]">
                        {item.description}
                    </p>
                </div>
                <div className="mt-3">
                    <Link key={index} href={`/${item.id}`}>
                        <button className="bg-red-600 text-white font-bold py-2 px-3 rounded-full shadow-md text-sm">
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