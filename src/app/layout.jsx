import "../app/globals.css";
import ThemeAndAccessibility from "../components/ThemeAndAccessibility";
// 1. Importe o CartProvider do seu arquivo de contexto
import { CartProvider } from "@/context/CartContext"; 

export const metadata = {
  title: "Pedido Agora",
  description: "Faça seu pedido agora!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Adicionei as fontes Poppins e Roboto para garantir que todas as páginas funcionem */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@500;600&family=Quicksand:wght@400&family=Carter+One&family=RocknRoll+One&family=Paytone+One&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-black bg-yellow-50 dark:bg-gray-900 dark:text-white">
        {/* 2. Envolva toda a sua aplicação com o CartProvider */}
        {/* Tudo que estiver dentro do Provider terá acesso ao carrinho */}
        <CartProvider>
          {children}
          <ThemeAndAccessibility />
        </CartProvider>
      </body>
    </html>
  );
}
