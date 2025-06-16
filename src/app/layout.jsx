
import "../app/globals.css"


export const metadata = {
  title: "Pedido Agora",
  description: "Faça seu pedido agora!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&family=Carter+One&family=RocknRoll+One&family=Paytone+One&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
            {children}
      </body>
    </html>
  );
}