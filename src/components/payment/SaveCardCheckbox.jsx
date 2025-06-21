import React from 'react';
import { CheckIcon } from './icons';

export default function SaveCardCheckbox({ isChecked, onToggle }) {
    // Define classes com base no estado para estilização dinâmica
    const baseClasses = "flex items-center justify-center flex-shrink-0 w-5 h-5 mr-3 rounded-md transition-all duration-200";
    const checkedClasses = "bg-custom-red-light border-2 border-custom-red-light";
    const uncheckedClasses = "bg-transparent border-2 border-custom-red-light";

    return (
        <section className="mt-6">
            <label htmlFor="save-card" className="flex items-center cursor-pointer">
                <div
                    className={`${baseClasses} ${isChecked ? checkedClasses : uncheckedClasses}`}
                >
                    {isChecked && <CheckIcon />}
                </div>
                <input
                    type="checkbox"
                    id="save-card"
                    className="hidden"
                    checked={isChecked}
                    onChange={onToggle}
                />
                <span className="text-base text-custom-zinc">Guardar os dados do cartão para pagamentos futuros</span>
            </label>
        </section>
    );
}