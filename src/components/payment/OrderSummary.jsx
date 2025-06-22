import React from 'react';
import { useState, useEffect } from 'react';

export default function OrderSummary({ subtotal, deliveryFee, total }) {
    // Função para formatar os números como moeda brasileira (BRL)
    const formatCurrency = (value) => {
        if (typeof value !== 'number') return 'R$ 0,00';
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        // A margem inferior da seção inteira foi aumentada em telas maiores (sm:mb-12)
        <section className="mb-8 sm:mb-12">
            {/* O título agora aumenta para text-3xl e tem mais margem em telas maiores */}
            <h1 className="mb-4 text-2xl font-semibold font-poppins sm:text-3xl sm:mb-6">
                Resumo do pedido
            </h1>
            
            {/* O tamanho do texto e o espaçamento entre as linhas foram aumentados em telas maiores */}
            <div className="space-y-3 text-lg sm:text-xl sm:space-y-4 text-custom-zinc">
                <div className="flex justify-between">
                    <span>Pedido</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Taxas de entrega</span>
                    <span>{formatCurrency(deliveryFee)}</span>
                </div>
            </div>

            {/* A linha separadora tem mais margem em telas maiores */}
            <hr className="my-4 sm:my-6 border-custom-gray-light" />
            
            {/* O texto do 'Total' também foi aumentado para sm:text-xl */}
            <div className="flex justify-between text-lg font-semibold sm:text-xl text-custom-stone">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
            </div>
        </section>
    );
}