'use client';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeAndAccessibility from './ThemeAndAccessibility'; // ✅ Ativado

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="px-6 py-3 dark:bg-gray-950 bg-yellow-100 shadow-md">
      <div className="relative flex items-center justify-between h-16 mx-auto max-w-7xl">
        
        {/* Left: Mobile Menu Icon + Logo */}
        <div className="flex items-center space-x-4 lg:flex-1">

          <button onClick={toggleMenu} className="block lg:hidden" aria-label="Abrir menu">
            <Bars3Icon className="w-6 h-6 text-red-700" />
          </button>

          <Link href="/" className="flex items-center">
            <img
              src="/images/logopedidoagora.png"
              alt="Pedido Agora"
              className="w-28 lg:w-60"
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden lg:flex dark:bg-gray-950 justify-center items-center space-x-[60px] dark:text-white text-red-700 font-semibold text-xl">
          <a href="/restaurantes">Início</a>
          <a href="#">Combos</a>
          <a href="#">Bebidas</a>a
          <a href="#">Promoções</a>
        </nav>

        {/* Right: Login + Acessibilidade */}
        <div className="flex items-center justify-end lg:flex-1 space-x-3">
          <Link href="/login">
            <button className="py-4 font-semibold dark:border dark:bg-gray-950 dark:hover:bg-gray-800 text-white transition-colors  bg-red-600 rounded-md w-28 hover:bg-red-700">
              Entrar
            </button>
          </Link>
          
          {/* ✅ Botões de acessibilidade aqui */}
          <ThemeAndAccessibility />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 font-semibold text-center dark:bg-gray-950 text-red-700 lg:hidden">
          <a href="/restaurantes" onClick={toggleMenu}>Início</a>
          <a href="#" onClick={toggleMenu}>Combos</a>
          <a href="#" onClick={toggleMenu}>Bebidas</a>
          <a href="#" onClick={toggleMenu}>Promoções</a>
        </div>
      )}
    </header>
  );
}
