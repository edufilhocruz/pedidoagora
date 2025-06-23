/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configuração do darkMode
  darkMode: ["class"],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cores que a página de pagamento precisa
      colors: {
        'custom-stone': '#3C2F2F',
        'custom-zinc': '#7D7D7D',
        'custom-red-dark': '#C01E1E',
        'custom-red': '#D62424',
        'custom-red-light': '#EF2A39',
        'custom-gray-light': '#F0F0F0',
        'custom-gray-bg': '#F3F4F6',
        'custom-orange': '#FC8A18',
        // ADIÇÃO: Cor amarela para o fundo do header
        'custom-yellow-light': '#FEFBEB', // Tom similar ao 'yellow-100' do Tailwind
      },
      // TODAS as fontes
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        rocknroll: ['RocknRoll_One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        paytone: ['"Paytone One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};