🚀 Como Executar o Frontend (Desenvolvimento)
Para iniciar o ambiente de desenvolvimento do frontend, siga os passos abaixo:

Pré-requisitos:

Node.js (versão 18.x ou superior recomendada)
npm (geralmente vem com o Node.js)
Clone o repositório (se ainda não o fez):

Bash
git clone <url-do-seu-repositorio>
cd <pasta-do-projeto>/frontend # Navegue até a pasta do frontend
 Instale as dependências:

Bash
npm install
 Rode o servidor de desenvolvimento:

Bash
npm run dev
 Após executar este comando, a aplicação frontend estará disponível em http://localhost:3000 (ou outra porta, se configurada de forma diferente).

🔷 1. Arquitetura Geral (Visão Macro)
A arquitetura do sistema é dividida em 3 camadas principais:

Frontend (Web/Mobile): Interface voltada ao usuário, desenvolvida em Next.js para a versão web.
Backend (Core da aplicação): Responsável pela lógica de negócio.
API REST: Camada intermediária para integração entre frontend e backend.
🔹 2. Frontend
✨ Funcionalidades

Tela de Login/Registro
Tela Inicial com lista de restaurantes
Tela de Restaurante com cardápio
Carrinho e Checkout
Perfil do Usuário
Área do Restaurante
🛠️ Tecnologias Utilizadas/Sugeridas

Next.js (Web - Utilizado)
React.js (Base do Next.js)
React Native / Expo (Mobile - Sugestão)
Tailwind CSS (Sugestão, ou a biblioteca de UI que você estiver usando)
Redux / Context API (Para gerenciamento de estado, se necessário)
🔹 3. Backend
⚙️ Módulos Principais

Auth Module (JWT, Bcrypt)
User Module
Restaurant Module
Order Module
Payment Module
Notification Module (Push/Email)
🗃️ Banco de Dados

MySQL (Relacional)
Entidades: Usuários, Restaurantes, Produtos, Pedidos, Endereços, Avaliações
📦 Tecnologias

Node.js (Express)
Prisma ORM
JWT + Bcrypt
Socket.io (tempo real)
MySQL (Redis opcional)
🔹 4. API REST
📍 Principais Endpoints

👤 Autenticação

Método	Rota	Descrição
POST	/api/login	Autentica o usuário
POST	/api/signup	Cria nova conta
🛍️ Pedidos

Método	Rota	Descrição
POST	/api/pedidos	Cria novo pedido
GET	/api/pedidos/:id	Detalhes de um pedido
PUT	/api/pedidos/:id	Atualiza status do pedido
🍽️ Restaurantes

Método	Rota	Descrição
GET	/api/restaurantes	Lista restaurantes
GET	/api/restaurantes/:id	Detalhes do restaurante
POST	/api/restaurantes	Criação de restaurante (admin)

📊 Diagrama de Comunicação
O Frontend comunica com a API REST via chamadas HTTP.
A API REST interage com o Backend para processar os dados.
O Backend retorna dados ao Frontend, com atualizações em tempo real via WebSocket.

🎯 Conclusão
O projeto Pedido Agora representa uma arquitetura moderna de sistemas distribuídos baseada em client-server desacoplado. Ele segue boas práticas de autenticação, modularização e comunicação assíncrona em tempo real.