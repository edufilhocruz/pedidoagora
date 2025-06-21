
import Link from "next/link";


export default function CardsPromocoes(){
    const items = [
   {
        id: "customize-cheeseburger",
        name: "Combo Hamburguer",
        description: "Hamburguer + Batata Frita + Refrigerante Latinha",
        originalPrice: "R$ 29,90",
        discountPrice: "R$ 19,90",
        image: "/images/combo-hamburger.png"
    },
    {
        id:'combo_de_Bebidas',
        name: 'Combo Whisky',
        description: 'RedLabel + Água de cocô + RedBull',
        originalPrice: "R$ 120,90",
        discountPrice: "R$ 100,90",
        image: "/images/comboBebidas.png"
    },
    {
        id:'ComboPizza',
        name: 'Pizza + Refrigerante',
        description: `Combo promocional 
        1 Pizza + 1 Refrigerante 2L`,
        originalPrice: "R$ 50,90",
        discountPrice: "R$ 40,90",
        image: "/images/comboPizza.png"
    },
    {
        id: 'combo_de_Sushi',
        name: 'Combo Sushi',
        description: 'Nigiri + Shashimi ',
        originalPrice: "R$ 100,90",
        discountPrice: "R$ 40,90",
        image: "/images/comboPizza.png",
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
                        <button className="bg-red-600 text-white font-bold py-2 px-3 rounded-full shadow-md text-sm flex items-center justify-center space-x-1">
                            {item.originalPrice && (
                                <span className="line-through opacity-75 text-xs">
                                    {item.originalPrice}
                                </span>
                            )}
                            <span>{item.discountPrice || item.price}</span>
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    ))}
</div>
    )
}