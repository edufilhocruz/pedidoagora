import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function PopularItems() {
  const items = [
    {
      name: 'Cheeseburger',
      description: 'Sabor duplo e suculento',
      price: 'R$ 14,90',
      image: '/images/cheeseburger.png',
    },
    {
      name: 'Combo Hamburguer',
      description: 'Sabor duplo e suculento',
      price: 'R$ 22,90',
      image: '/images/combo-hamburger.png',
    },
    {
      name: 'Pizza Pepperoni',
      description: 'Pepperoni e queijo extra',
      price: 'R$ 34,90',
      image: '/images/pizza-pepperoni.png',
    },
    {
      name: 'Esfiha',
      description: 'Frango desfiado e suculento',
      price: 'R$ 6,90',
      image: '/images/esfiha.png',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Barra de Pesquisa */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar no cardápio..."
            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder:text-sm"
          />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-center text-[#1F1F1F] font-['Quicksand'] text-[20px] mb-10">
        Top 1 mais vendidos - o melhor do nosso cardápio!
      </h2>

      {/* Cards de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFEA991A] border border-[#FFEA9942] rounded-[15px] p-4 flex flex-col justify-between items-center h-[400px]"
          >
            <div className="flex flex-col items-center flex-grow">
              <img
                src={item.image}
                alt={item.name}
                className="mb-4"
                width={120}
                height={120}
              />
              <div className="text-center">
                <h3 className="text-[#3C2F2F] font-['Carter_One'] text-[24px] leading-tight">
                  {item.name}
                </h3>
                <p className="text-[#3C2F2F] font-['RocknRoll_One'] text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
                {item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}