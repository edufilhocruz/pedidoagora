// src/repositories/user.repository.js
const { dbPool } = require('../index'); // Importa o pool de conexões do index.js

// Função para buscar um usuário por ID
async function getUserById(userId) {
  try {
    const [rows] = await dbPool.execute('SELECT * FROM users WHERE id = ?', [userId]);
    return rows[0]; // Retorna o primeiro resultado (ou undefined se não encontrado)
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error.message);
    throw new Error('Erro ao buscar usuário');
  }
}

// Função para criar um novo usuário
async function createUser(userData) {
  const { name, email, password } = userData;
  try {
    const [result] = await dbPool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return { id: result.insertId, name, email }; // Retorna o usuário criado
  } catch (error) {
    console.error('Erro ao criar usuário:', error.message);
    throw new Error('Erro ao criar usuário');
  }
}

// Função para atualizar um usuário
async function updateUser(userId, userData) {
  const { name, email } = userData;
  try {
    const [result] = await dbPool.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, userId]
    );
    return result.affectedRows > 0; // Retorna true se atualizou com sucesso
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error.message);
    throw new Error('Erro ao atualizar usuário');
  }
}

// Função para deletar um usuário
async function deleteUser(userId) {
  try {
    const [result] = await dbPool.execute('DELETE FROM users WHERE id = ?', [userId]);
    return result.affectedRows > 0; // Retorna true se deletou com sucesso
  } catch (error) {
    console.error('Erro ao deletar usuário:', error.message);
    throw new Error('Erro ao deletar usuário');
  }
}

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};