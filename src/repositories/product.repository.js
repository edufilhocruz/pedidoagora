// src/repositories/product.repository.js
const { dbPool } = require('../index'); // Importa o pool de conexões do index.js

// Função para buscar todos os produtos
async function getAllProducts() {
  try {
    const [rows] = await dbPool.execute('SELECT * FROM products');
    return rows;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    throw new Error('Erro ao buscar produtos');
  }
}

// Função para buscar um produto por ID
async function getProductById(productId) {
  try {
    const [rows] = await dbPool.execute('SELECT * FROM products WHERE id = ?', [productId]);
    return rows[0]; // Retorna o primeiro resultado (ou undefined se não encontrado)
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error.message);
    throw new Error('Erro ao buscar produto');
  }
}

// Função para criar um novo produto
async function createProduct(productData) {
  const { name, description, price, restaurant_id } = productData;
  try {
    const [result] = await dbPool.execute(
      'INSERT INTO products (name, description, price, restaurant_id) VALUES (?, ?, ?, ?)',
      [name, description, price, restaurant_id]
    );
    return { id: result.insertId, name, description, price, restaurant_id };
  } catch (error) {
    console.error('Erro ao criar produto:', error.message);
    throw new Error('Erro ao criar produto');
  }
}

// Função para atualizar um produto
async function updateProduct(productId, productData) {
  const { name, description, price, restaurant_id } = productData;
  try {
    const [result] = await dbPool.execute(
      'UPDATE products SET name = ?, description = ?, price = ?, restaurant_id = ? WHERE id = ?',
      [name, description, price, restaurant_id, productId]
    );
    return result.affectedRows > 0; // Retorna true se atualizou com sucesso
  } catch (error) {
    console.error('Erro ao atualizar produto:', error.message);
    throw new Error('Erro ao atualizar produto');
  }
}

// Função para deletar um produto
async function deleteProduct(productId) {
  try {
    const [result] = await dbPool.execute('DELETE FROM products WHERE id = ?', [productId]);
    return result.affectedRows > 0; // Retorna true se deletou com sucesso
  } catch (error) {
    console.error('Erro ao deletar produto:', error.message);
    throw new Error('Erro ao deletar produto');
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};