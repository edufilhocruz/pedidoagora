'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';

// Dados de exemplo para a página de promoções
const promocoesData = [
  { id: 19, name: 'Pizza em Dobro', description: 'Compre uma pizza grande e leve outra de graça.', price: 59.90, image: '/images/promo1.jpg' },
  { id: 20, name: '20% OFF em Hambúrgueres', description: 'Todo o cardápio de hambúrgueres com 20% de desconto.', price: 23.90, image: '/images/promo2.jpg' },
  { id: 21, name: 'Bebida Grátis', description: 'Na compra de qualquer combo, ganhe um refrigerante lata.', price: 35.00, image: '/images/promo3.jpg' },
  { id: 22, name: 'Sobremesa por R$5', description: 'Qualquer sobremesa por apenas R$5 na compra de um prato principal.', price: 5.00, image: '/images/promo4.jpg' },
  { id: 23, name: 'Frete Grátis', description: 'Pedidos acima de R$50 com entrega por nossa conta.', price: 50.00, image: '/images/promo5.jpg' },
  { id: 24, name: 'Combo Casal', description: 'Dois pratos principais + duas bebidas por um preço especial.', price: 79.90, image: '/images/promo6.jpg' },
];

export default function PromocoesComponent() {
  // A lógica do carrinho vem diretamente do Contextox
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
          <h1 className="mb-10 text-4xl font-bold text-center text-red-700 dark:text-red-400">Nossas Promoções</h1>
          
          <div className="grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {promocoesData.map((promo) => (
              <div key={promo.id} className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
                <Image src={promo.image} alt={promo.name} width={500} height={300} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{promo.name}</h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
                      R$ {promo.price.toFixed(2).replace('.', ',')}
                    </p>
                    <button
                      onClick={() => addToCart(promo)}
                      className="px-4 py-2 font-bold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      Aproveitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* A seção "Seu Pedido" é idêntica e reutiliza a mesma lógica do carrinho */}
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
