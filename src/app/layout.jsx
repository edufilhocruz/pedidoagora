import "../app/globals.css";
import ThemeAndAccessibility from "../components/ThemeAndAccessibility";

export const metadata = {
  title: "Pedido Agora",
  description: "Faça seu pedido agora!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&family=Carter+One&family=RocknRoll+One&family=Paytone+One&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-yellow-50 text-black dark:bg-gray-900 dark:text-white">
        {children}
        <ThemeAndAccessibility />
      </body>
    </html>
  );
}
