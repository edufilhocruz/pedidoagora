import React from 'react';
import PaymentOption from './PaymentOption';
import { MastercardIcon, VisaIcon } from './icons';

export default function PaymentMethods({ selectedMethod, onMethodChange }) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-semibold font-poppins">Métodos de pagamento</h2>
            <div className="space-y-4">
                <PaymentOption
                    cardName="Cartão de crédito"
                    cardNumber="5105 **** **** 0505"
                    icon={<MastercardIcon />}
                    isSelected={selectedMethod === 'credit'}
                    onSelect={() => onMethodChange('credit')}
                />
                <PaymentOption
                    cardName="Cartão de débito"
                    cardNumber="3566 **** **** 0505"
                    icon={<VisaIcon />}
                    isSelected={selectedMethod === 'debit'}
                    onSelect={() => onMethodChange('debit')}
                />
            </div>
        </section>
    );
}