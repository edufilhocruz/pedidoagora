import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon } from './icons';
import ThemeAndAccessibility from '../../components/ThemeAndAccessibility';




export default function PaymentHeader() {
    return (
        <header>
            {/* Container para alinhar o conteúdo com o restante da página (main e footer) */}
            <div className="flex items-center justify-start w-full max-w-4xl p-4 mx-auto">
                <Link href="/restaurantes" passHref>
                    <button aria-label="Voltar para restaurantes">
                        <ChevronLeftIcon />
                    </button>
                </Link>
            </div>
        </header>
    );
}