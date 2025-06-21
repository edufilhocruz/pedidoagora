import React from 'react';

export default function PaymentOption({ cardName, cardNumber, icon, isSelected, onSelect }) {
    const baseClasses = "flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300";
    const selectedClasses = "bg-custom-stone text-white shadow-lg";
    const unselectedClasses = "bg-custom-gray-bg text-custom-stone shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]";

    return (
        <div onClick={onSelect} className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}>
            <div className="flex items-center gap-4">
                {icon}
                <div className="font-roboto">
                    <p className={`text-base font-medium ${!isSelected && 'text-custom-stone'}`}>{cardName}</p>
                    <p className={`text-base font-medium ${isSelected ? 'text-custom-zinc' : 'text-custom-zinc'}`}>{cardNumber}</p>
                </div>
            </div>
            <div className="flex items-center justify-center w-6 h-6 border-2 border-white rounded-full">
                {isSelected && <div className="w-3 h-3 bg-white rounded-full"></div>}
            </div>
        </div>
    );
}