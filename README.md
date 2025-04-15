# 🍔 Projeto  Pedido Agora  - Documentação Técnica

## 📌 Visão Geral do Projeto

O **Pedido Agora** é uma aplicação de pedidos de comida desenvolvida com uma arquitetura robusta e moderna, separando claramente as responsabilidades entre **Frontend**, **Backend** e **API REST**. Este sistema visa garantir escalabilidade, manutenibilidade e uma ótima experiência para usuários e restaurantes parceiros.

---

## 🔷 1. Arquitetura Geral (Visão Macro)

A arquitetura do sistema é dividida em 3 camadas principais:

- **Frontend (Web/Mobile)**: Interface voltada ao usuário.
- **Backend (Core da aplicação)**: Responsável pela lógica de negócio.
- **API REST**: Camada intermediária para integração entre frontend e backend.

---

## 🔹 2. Frontend

### ✨ Funcionalidades

- Tela de Login/Registro
- Tela Inicial com lista de restaurantes
- Tela de Restaurante com cardápio
- Carrinho e Checkout
- Perfil do Usuário
- Área do Restaurante

### 🛠️ Tecnologias Sugeridas

- React.js / Next.js (Web)
- React Native / Expo (Mobile)
- Tailwind CSS
- Redux / Context API

---

## 🔹 3. Backend

### ⚙️ Módulos Principais

- Auth Module (JWT, Bcrypt)
- User Module
- Restaurant Module
- Order Module
- Payment Module
- Notification Module (Push/Email)

### 🗃️ Banco de Dados

- MySQL (Relacional)
- Entidades: Usuários, Restaurantes, Produtos, Pedidos, Endereços, Avaliações

### 📦 Tecnologias

- Node.js (Express)
- Prisma ORM
- JWT + Bcrypt
- Socket.io (tempo real)
- MySQL (Redis opcional)

---

## 🔹 4. API REST


### 📍 Principais Endpoints

#### 👤 Autenticação

| Método | Rota         | Descrição             |
|--------|--------------|-----------------------|
| POST   | /api/login   | Autentica o usuário   |
| POST   | /api/signup  | Cria nova conta       |

#### 🛍️ Pedidos

| Método | Rota               | Descrição                 |
|--------|--------------------|---------------------------|
| POST   | /api/pedidos       | Cria novo pedido          |
| GET    | /api/pedidos/:id   | Detalhes de um pedido     |
| PUT    | /api/pedidos/:id   | Atualiza status do pedido |

#### 🍽️ Restaurantes

| Método | Rota                    | Descrição                       |
|--------|-------------------------|---------------------------------|
| GET    | /api/restaurantes       | Lista restaurantes              |
| GET    | /api/restaurantes/:id   | Detalhes do restaurante         |
| POST   | /api/restaurantes       | Criação de restaurante (admin)  |

---

## 📊 Diagrama de Comunicação

- O **Frontend** comunica com a **API REST** via chamadas HTTP.
- A **API REST** interage com o **Backend** para processar os dados.
- O Backend retorna dados ao Frontend, com atualizações em tempo real via **WebSocket**.

---

## 🎯 Conclusão

O projeto **Pedido Agora** representa uma arquitetura moderna de sistemas distribuídos baseada em client-server desacoplado. Ele segue boas práticas de autenticação, modularização e comunicação assíncrona em tempo real.

---