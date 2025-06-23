'use client'; 

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// --- INÍCIO: Importação dos Componentes ---
import PaymentHeader from '../../components/payment/PaymentHeader';
import OrderSummary from '../../components/payment/OrderSummary';
import PaymentMethods from '../../components/payment/PaymentMethods';
import SaveCardCheckbox from '../../components/payment/SaveCardCheckbox';
import PaymentFooter from '../../components/payment/PaymentFooter';
import LoadingOverlay from '../../components/payment/LoadingOverlay';

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export default function PagamentoPage() {
    // --- ESTADO DO COMPONENTE ---
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('credit');
    const [saveCard, setSaveCard] = useState(true);
    const router = useRouter();
    // Estado para controlar a lógica de falha/sucesso alternada
    const [shouldFailNext, setShouldFailNext] = useState(true);

    // --- DADOS E CÁLCULOS DO PEDIDO ---
    const subtotal = 16.48;
    const deliveryFee = 5.00;
    const total = subtotal + deliveryFee;

    // --- FUNÇÕES DE INTERAÇÃO ---
    const handlePaymentSubmit = () => {
        setIsLoading(true);
    };

    // --- EFEITOS (SIDE EFFECTS) ---

    // NOVO useEffect: Sincroniza o estado com o sessionStorage na primeira vez que a página carrega no navegador.
    useEffect(() => {
        // Acessa o sessionStorage para ver qual foi o último resultado.
        const storedValue = sessionStorage.getItem('shouldFailNextPayment');
        // Se houver um valor guardado, usa ele. Se não, o padrão 'true' (falhar primeiro) é mantido.
        if (storedValue !== null) {
            setShouldFailNext(JSON.parse(storedValue));
        }
    }, []); // O array vazio [] garante que isso rode apenas uma vez.

    // useEffect principal para a lógica de pagamento
    useEffect(() => {
        if (!isLoading) return;

        const timer = setTimeout(() => {
            if (shouldFailNext) {
                router.push('/recusado');
            } else {
                router.push('/confirmado'); 
            }
            
            // Prepara o resultado para a PRÓXIMA tentativa.
            const nextResultIsFailure = !shouldFailNext;
            
            // Atualiza o estado no navegador para persistir entre as navegações.
            sessionStorage.setItem('shouldFailNextPayment', JSON.stringify(nextResultIsFailure));
            // Atualiza o estado local do componente.
            setShouldFailNext(nextResultIsFailure);

        }, 4000); // 4 segundos

        // Limpa o timer se o componente for desmontado
        return () => clearTimeout(timer);
    }, [isLoading, router, shouldFailNext]);

    return (
        // Layout principal: fundo cinza que centraliza o card branco
        <div className="flex items-center justify-center w-full min-h-screen p-4 transition-all bg-slate-100 dark:bg-gray-900">

        

            
            {/* O card principal com largura máxima consistente */}
            <div className="relative w-full max-w-xl overflow-hidden transition-all bg-white rounded-lg shadow-xl dark:bg-gray-800 text-green dark:text-white pb-28">

                <PaymentHeader />

                <main className="p-4">
                    <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />

                    <section className="mb-8">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Tempo estimado de entrega:</span>
                            <span>15 - 30min</span>
                        </div>
                    </section>
                    
                    <PaymentMethods 
                        selectedMethod={selectedMethod} 
                        onMethodChange={setSelectedMethod} 
                    />

                    <SaveCardCheckbox 
                        isChecked={saveCard}
                        onToggle={() => setSaveCard(!saveCard)}
                    />
                </main>
            </div>

            <PaymentFooter total={total} onPaymentSubmit={handlePaymentSubmit} />
            
            {isLoading && <LoadingOverlay />}
        </div>
    );
}