// src/index.js
const express = require('express');
const mysql = require('mysql2/promise'); // Usando mysql2/promise para async/await
require('dotenv').config();
const helmet = require('helmet'); // Para headers de segurança
const rateLimit = require('express-rate-limit'); // Para limitar requisições

// Importação das rotas
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');
const paymentRoutes = require('./routes/payment.routes');

// Inicializa o Express
const app = express();

// Middleware de segurança
app.use(helmet()); // Adiciona headers de segurança (ex.: protege contra XSS)
app.use(express.json());

// Rate limiting para evitar ataques de força bruta
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
});
app.use(limiter);

// Configuração do pool de conexões com o MySQL (mais seguro que uma única conexão)
const dbPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pedidoagora_db',
  waitForConnections: true,
  connectionLimit: 10, // Limite de conexões simultâneas
  queueLimit: 0,
});

// Teste inicial da conexão ao MySQL
(async () => {
  try {
    const connection = await dbPool.getConnection();
    console.log('Conectado ao MySQL com sucesso!');
    connection.release();
  } catch (err) {
    console.error('Erro ao conectar ao MySQL. Verifique as credenciais ou o servidor.');
    process.exit(1);
  }
})();

// Exporta o pool para ser usado nos repositórios
module.exports.dbPool = dbPool;

// Definição das rotas
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', paymentRoutes);

// Rota inicial para teste
app.get('/', (req, res) => {
  res.send('API do PedidoAgora está funcionando!');
});

// Middleware de tratamento de erros (evita expor detalhes sensíveis)
app.use((err, req, res, next) => {
  console.error('Erro:', err.message); // Log apenas a mensagem, sem stack trace
  res.status(500).json({ error: 'Ocorreu um erro no servidor. Tente novamente mais tarde.' });
});

// Configuração da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor rodando com HTTPS na porta ${PORT}`);
});
