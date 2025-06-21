'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// --- ÍCONE COM TAMANHO AUMENTADO ---
const CheckCircleIcon = () => (
    // TROCA: O tamanho foi aumentado de 80x80 para 120x120
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#22C55E"/> 
        <path d="M30 51.5L44.5 66L70 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ConfirmPayment() {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/');
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen p-4 bg-slate-100">
            <div className="flex flex-col items-center w-full max-w-md gap-8 p-8 text-center bg-white rounded-lg shadow-xl sm:p-12">
                
                <CheckCircleIcon />

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-custom-red-dark">
                        Pedido Confirmado!
                    </h1>
                    <p className="text-lg text-custom-zinc">
                        Seu pagamento foi bem-sucedido.
                        <br />
                        Um recibo desta compra foi enviado para o seu e-mail.
                    </p>
                </div>
                
                {/* --- BOTÃO COM CORES ATUALIZADAS --- */}
                <button
                    onClick={handleGoBack}
                    className="px-10 py-3 text-lg font-bold text-white transition-colors rounded-lg bg-custom-red-dark hover:bg-red-800"
                >
                    Voltar
                </button>
            </div>
        </div>
    );
}
