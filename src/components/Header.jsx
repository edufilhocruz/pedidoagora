'use client';
import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeAndAccessibility from './ThemeAndAccessibility';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [userName, setUserName] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const userDataString = sessionStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData && userData.nome) {
          setUserName(userData.nome);
        }
      }
    } catch (error) {
      console.error("Erro ao ler os dados do usuário do sessionStorage:", error);
      sessionStorage.removeItem('userData');
      setUserName(null);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    setUserName(null);
    router.push('/login');
  };

  // --- FUNÇÃO PARA NAVEGAÇÃO MOBILE ---
  // Esta função garante que o menu feche ANTES de navegar.
  const handleMobileNav = (path) => {
    toggleMenu(); // Fecha o menu
    router.push(path); // Navega para a página desejada
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 shadow-md bg-custom-yellow-light dark:bg-gray-950">
      <div className="relative flex items-center justify-between h-16 mx-auto max-w-7xl">
        
        <div className="flex items-center space-x-4 lg:flex-1">
          <button onClick={toggleMenu} className="block lg:hidden" aria-label="Abrir menu">
            <Bars3Icon className="w-6 h-6 text-custom-red-dark" />
          </button>

          <Link href="/" className="flex items-center">
            <img
              src="/images/logopedidoagora.png"
              alt="Pedido Agora"
              className="w-60 lg:w-96"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex dark:bg-gray-950 justify-center items-center space-x-[60px] dark:text-white text-custom-red-dark font-semibold text-xl">
          <Link href="/restaurantes">Início</Link>
          <Link href="/combos">Combos</Link>
          <Link href="/bebidas">Bebidas</Link>
          <Link href="/promocoes">Promoções</Link>
        </nav>

        <div className="flex items-center justify-end space-x-3 lg:flex-1">
          {userName ? (
            <>
              <span className="hidden font-semibold sm:block text-custom-red-dark dark:text-white">
                Olá, {userName}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold text-white transition-colors rounded-md bg-custom-red sm:py-4 dark:border dark:bg-gray-950 dark:hover:bg-gray-800 sm:w-28 hover:bg-custom-red-dark"
              >
                Sair
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 font-semibold text-white transition-colors rounded-md bg-custom-red sm:py-4 dark:border dark:bg-gray-950 dark:hover:bg-gray-800 sm:w-28 hover:bg-custom-red-dark">
                Entrar
              </button>
            </Link>
          )}
          <ThemeAndAccessibility />
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-1 font-semibold text-center bg-custom-yellow-light text-custom-red-dark dark:bg-gray-950 lg:hidden">
          {/* Botões que chamam a função de navegação, tornando a ação mais explícita */}
          <button onClick={() => handleMobileNav('/restaurantes')} className="w-full px-4 py-3 text-left">Início</button>
          <button onClick={() => handleMobileNav('/combos')} className="w-full px-4 py-3 text-left">Combos</button>
          <button onClick={() => handleMobileNav('/bebidas')} className="w-full px-4 py-3 text-left">Bebidas</button>
          <button onClick={() => handleMobileNav('/promocoes')} className="w-full px-4 py-3 text-left">Promoções</button>
        </div>
      )}
    </header>
  );
}
