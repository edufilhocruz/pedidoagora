'use client';

// Este componente exibe o resumo do pedido, incluindo os itens e os totais.
export default function OrderSummary({ cartItems = [], subtotal = 0, deliveryFee = 0, total = 0 }) {
  return (
    <section className="mb-6">
      <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-200 dark:border-gray-600">
        Resumo do Pedido
      </h2>
      
      {/* Lista de itens do carrinho */}
      <ul className="mb-4 space-y-3">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index} className="flex justify-between text-gray-800 dark:text-gray-200">
              <span>{item.name}</span>
              <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Nenhum item no carrinho.</p>
        )}
      </ul>

      {/* Detalhes de custo */}
      <div className="pt-4 space-y-2 border-t-2 border-gray-200 dark:border-gray-600">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
          <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Taxa de Entrega</span>
          <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </section>
  );
}