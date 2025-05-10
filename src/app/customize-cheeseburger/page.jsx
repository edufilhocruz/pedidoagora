'use client';
import CustomizeCheeseburger from "../../components/CustomizeCheeseburger";

export default function CustomizeCheeseburgerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Conteúdo principal */}
      <div className="flex-grow pb-[120px]"> {/* Reservando espaço para a barra fixa */}
        <CustomizeCheeseburger />
      </div>

      {/* Barra inferior fixa */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFEA99] px-4 sm:px-6 py-3 flex items-center justify-between z-auto">
        <div className="flex items-center space-x-4">
          <span className="text-[#EF2A39] font-['Paytone_One'] text-[24px] sm:text-[28px] lg:text-[32px]">
            R$ 14,90
          </span>
        </div>
        <button className="bg-[#C11E1E] rounded-[20px] px-6 py-3 text-white font-['Paytone_One'] text-[18px] sm:text-[20px]">
          PEÇA AGORA
        </button>
      </div>
    </div>
  );
}