'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';

// Dados específicos para a página de bebidas
const bebidasData = [
  { id: 13, name: 'Guaravita', description: 'Copo de 290ml.', price: 2.00, image: '/images/Guaravita.png' },
  { id: 14, name: 'Refrigerante 2L', description: 'Coca-Cola, Guaraná, etc.', price: 12.90, image: '/images/Refrigerante.png' },
  { id: 15, name: 'Refrigerante Lata', description: 'Lata de 350ml.', price: 8.90, image: '/images/RefrigeranteLata.png' },
  { id: 16, name: 'Redbull', description: 'Energético 250ml.', price: 19.90, image: '/images/Redbull.png' },
  { id: 17, name: 'Água de Coco', description: 'Garrafa de 1L.', price: 29.90, image: '/images/aguadecoco.png' },
  { id: 18, name: 'Whisky Red Label', description: 'Garrafa de 1L.', price: 99.90, image: '/images/Whisky.png' },
];

export default function BebidasComponent() {
  // A lógica do carrinho vem diretamente do Contexto
  const { cart, addToCart, removeFromCart, total } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    router.push('/pagamento');
  };

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900 pt-28">
        <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-10 text-4xl font-bold text-center text-red-700 dark:text-red-400">Nossas Bebidas</h1>
          
          <div className="grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {bebidasData.map((bebida) => (
              <div key={bebida.id} className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
                <Image src={bebida.image} alt={bebida.name} width={500} height={300} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{bebida.name}</h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{bebida.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
                      R$ {bebida.price.toFixed(2).replace('.', ',')}
                    </p>
                    <button
                      onClick={() => addToCart(bebida)}
                      className="px-4 py-2 font-bold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* A seção "Seu Pedido" */}
          <div className="p-6 mt-16 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-center text-red-700 dark:text-red-400">Seu Pedido</h2>
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">Seu carrinho está vazio.</p>
            ) : (
              <div>
                <ul className="mb-6 space-y-4">
                  {cart.map((item, index) => (
                    <li key={index} className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col">
                        <span className="text-gray-800 dark:text-white">{item.name}</span>
                        <span className="font-semibold text-gray-600 dark:text-gray-300">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="px-3 py-1 text-xs font-semibold text-red-700 transition-colors bg-red-100 rounded-full dark:text-red-300 dark:bg-red-900/50 hover:bg-red-200"
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-6 text-2xl font-bold">
                  <span className="text-gray-800 dark:text-white">Total:</span>
                  <span className="text-green-600 dark:text-green-400">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            )}
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full px-4 py-3 mt-8 text-xl font-bold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </main>
    </>
  );
}