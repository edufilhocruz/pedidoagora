'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showNotRegistered, setShowNotRegistered] = useState(false);

  const handleCheckEmail = (e) => {
    e.preventDefault();
    const registeredEmails = ['exemplo@dominio.com'];
    if (email && !registeredEmails.includes(email.trim())) {
      setShowNotRegistered(true);
    } else {
      setShowNotRegistered(false);
      alert('Login em andamento...');
    }
  };

  const closeModal = () => {
    setShowNotRegistered(false);
  };

  return (
    // Fundo com imagem clara que NÃO muda no dark
    <div className="min-h-screen bg-[url('/images/fundo-claro.png')] bg-cover bg-center flex items-center justify-center p-4">
      {/* Card com suporte a dark mode */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Pedido Agora Logo" width={150} height={150} />
        </div>
        <h1 className="text-2xl font-bold text-center text-red-600 dark:text-red-400 mb-6">Seja bem vindo</h1>
        <form onSubmit={handleCheckEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Endereço de e-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu endereço de e-mail aqui"
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Digite sua senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha aqui"
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <Link href="/cadastro">
              <button
                type="button"
                className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition mt-[25px]"
              >
                Fazer Cadastro
              </button>
            </Link>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition mt-[25px]"
              disabled={!email || !password}
            >
              Fazer Login
            </button>
          </div>
        </form>
      </div>

      {/* Modal (Popup) */}
      {showNotRegistered && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">E-mail não cadastrado</h2>
            <Link href="/cadastro">
              <button
                type="button"
                className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition mb-3"
                onClick={closeModal}
              >
                Fazer Cadastro
              </button>
            </Link>
            <button
              type="button"
              className="w-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 p-3 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 transition"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
