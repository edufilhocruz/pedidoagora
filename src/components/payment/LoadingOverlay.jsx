import React from 'react';

// Componente para o ícone de spinner animado
const SpinnerIcon = () => (
    <div 
        className="w-12 h-12 border-4 rounded-full border-custom-red-light border-t-transparent animate-spin"
        role="status"
    >
        <span className="sr-only">Carregando...</span>
    </div>
);

export default function LoadingOverlay() {
    return (
        // Container principal que cobre toda a tela
        // - 'fixed inset-0': Cobre a tela inteira e fica por cima de tudo.
        // - 'bg-black/30': Fundo preto com 30% de opacidade.
        // - 'backdrop-blur-sm': APLICA O EFEITO DE BLUR no conteúdo que está atrás.
        // - 'flex items-center justify-center': Centraliza o card de loading.
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            
            {/* O card branco centralizado */}
            <div className="flex flex-col items-center gap-6 p-8 text-center bg-white rounded-lg shadow-xl">
                <SpinnerIcon />
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold font-poppins text-custom-stone">
                        Confirmando o pagamento!
                    </h2>
                    <p className="text-custom-zinc">
                        Por favor, aguarde enquanto confirmamos o pagamento.
                    </p>
                </div>
            </div>
        </div>
    );
}