'use client';
import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// 1. Reativando o import do ThemeAndAccessibility
import ThemeAndAccessibility from './ThemeAndAccessibility';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [userName, setUserName] = useState(null);
  const router = useRouter();

  // 2. Lógica reativada para ler o nome do usuário do localStorage
  useEffect(() => {
    // Usamos um try...catch para que a aplicação não quebre se os dados
    // no sessionStorage estiverem ausentes ou em um formato inesperado.
    try {
      const userDataString = sessionStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        // Garante que 'userData' e 'nomeCompleto' existem antes de usá-los
        if (userData && userData.nomeCompleto) {
          const firstName = userData.nomeCompleto.split(' ')[0];
          setUserName(firstName);
        }
      }
    } catch (error) {
      console.error("Erro ao ler os dados do usuário do sessionStorage:", error);
      // Se ocorrer um erro, limpa o dado potencialmente corrompido.
      sessionStorage.removeItem('userData');
      setUserName(null);
    }
    // A dependência vazia [] garante que isso rode apenas uma vez no cliente.
  }, []);

  // 3. Função de logout reativada
  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    setUserName(null);
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-yellow-100 shadow-md dark:bg-gray-950">
      <div className="relative flex items-center justify-between h-16 mx-auto max-w-7xl">
        
        <div className="flex items-center space-x-4 lg:flex-1">
          <button onClick={toggleMenu} className="block lg:hidden" aria-label="Abrir menu">
            <Bars3Icon className="w-6 h-6 text-red-700" />
          </button>

          <Link href="/" className="flex items-center">
            <img
              src="/images/logopedidoagora.png"
              alt="Pedido Agora"
              className="w-60 lg:w-96"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex dark:bg-gray-950 justify-center items-center space-x-[60px] dark:text-white text-red-700 font-semibold text-xl">
          <Link href="/restaurantes">Início</Link>
          <Link href="/combos">Combos</Link>
          <Link href="/pageBebidas">Bebidas</Link>
          <Link href="/pagePromocoes">Promoções</Link>
        </nav>

        {/* 4. Lógica de exibição do nome/botão "Sair" ou botão "Entrar" reativada */}
        <div className="flex items-center justify-end space-x-3 lg:flex-1">
          {userName ? (
            <>
              <span className="hidden font-semibold text-red-700 sm:block dark:text-white">
                Olá, {userName}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold text-white transition-colors bg-red-600 rounded-md sm:py-4 dark:border dark:bg-gray-950 dark:hover:bg-gray-800 sm:w-28 hover:bg-red-700"
              >
                Sair
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 font-semibold text-white transition-colors bg-red-600 rounded-md sm:py-4 dark:border dark:bg-gray-950 dark:hover:bg-gray-800 sm:w-28 hover:bg-red-700">
                Entrar
              </button>
            </Link>
          )}
          {/* 5. Componente ThemeAndAccessibility reativado */}
          <ThemeAndAccessibility />
        </div>
      </div>

      {/* Menu dropdown móvel */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 font-semibold text-center text-red-700 dark:bg-gray-950 lg:hidden">
          <Link href="/restaurantes" onClick={toggleMenu}>Início</Link>
          <Link href="/combos" onClick={toggleMenu}>Combos</Link>
          <Link href="/pageBebidas" onClick={toggleMenu}>Bebidas</Link>
          <Link href="/pagePromocoes" onClick={toggleMenu}>Promoções</Link>
        </div>
      )}
    </header>
  );
}
