'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// Componente para o ícone de 'X' (erro) - Design atualizado
const ErrorCircleIcon = () => (
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Círculo de fundo vermelho sólido */}
        <circle cx="50" cy="50" r="45" fill="#EF4444"/> {/* Usando red-500 do Tailwind */}
        {/* 'X' branco */}
        <path d="M35 35L65 65M65 35L35 65" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function PaymentRefused() {
    const router = useRouter();

    // Função para navegar de volta para a página de pagamento
    const handleTryAgain = () => {
        router.push('/pagamento'); // Redireciona de volta para tentar o pagamento novamente
    };

    return (
        // Container que centraliza o card na tela
        <div className="flex items-center justify-center w-full min-h-screen p-4 bg-slate-100">
            {/* O card branco com o conteúdo de erro */}
            <div className="flex flex-col items-center w-full max-w-md gap-12 p-12 text-center bg-white rounded-lg shadow-xl sm:p-12">
                
                <ErrorCircleIcon />

                <div className="space-y-2">
                    {/* TEXTO ATUALIZADO */}
                    <h1 className="text-3xl font-bold text-custom-red-dark">
                        Ops! Algo deu errado
                    </h1>
                    <p className="text-lg text-custom-zinc">
                        Não conseguimos processar seu pagamento,
                        <br />
                        então seu pedido não foi finalizado.
                    </p>
                </div>
                
                <button
                    onClick={handleTryAgain}
                    className="px-10 py-3 text-lg font-bold text-white transition-colors rounded-lg bg-custom-red-dark hover:bg-red-800"
                >
                    {/* TEXTO DO BOTÃO ATUALIZADO */}
                    Tentar novamente
                </button>
            </div>
        </div>
    );
}