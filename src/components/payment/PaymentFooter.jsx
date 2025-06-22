import React from 'react';
import ThemeAndAccessibility from '@/components/ThemeAndAccessibility';

// Função auxiliar para formatar o valor monetário.
const formatValue = (value) => {
    if (typeof value !== 'number') {
        return '0,00';
    }
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

// O componente recebe 'total' para o preço e 'onPaymentSubmit' para a ação do botão.
export default function PaymentFooter({ total, onPaymentSubmit }) {
    return (
        <footer className="fixed bottom-0 left-0 right-0 text-white bg-custom-stone">
            {/* Container do conteúdo:
              - max-w-md: Garante que a largura deste container seja a mesma do card principal.
              - mx-auto: Centraliza este container na tela.
              - flex, items-center, justify-between: Alianha os itens na vertical e os empurra para as extremidades.
            */}
            <div className="flex items-center justify-between w-full max-w-md p-4 mx-auto">
                {/* Preço Total */}
                <span className="text-3xl font-paytone">
                    <span className="text-custom-red-light">R$</span> {formatValue(total)}
                </span>

                {/* Botão de Ação com a função onClick restaurada */}
                <button 
                    onClick={onPaymentSubmit}
                    className="px-8 py-3 text-xl text-white transition-colors rounded-lg bg-custom-red-dark font-paytone hover:bg-red-800"
                >
                    Pague agora
                </button>
            </div>
        </footer>
    );
}