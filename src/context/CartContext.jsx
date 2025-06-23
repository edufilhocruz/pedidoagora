'use client';

import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const CartContext = createContext();

// 2. Cria o Provedor do Contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // O 'value' é o que será compartilhado com todos os componentes filhos
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
export function useCart() {
  return useContext(CartContext);
}