'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function CadastroForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    sexo: '',
    cpf: '',
    email: '',
    telefoneCelular: '',
    telefoneFixo: '',
    cep: '',
    enderecoCompleto: '',
    login: '',
    senha: '',
    confirmaSenha: ''
  });
  const [errors, setErrors] = useState({});
  const [address, setAddress] = useState({});
  // Funções de formatação para máscaras
  const formatCPF = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  };
  const formatCEP = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9);
  };
  const formatMobilePhone = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\(\d{2}\)\d{5})(\d)/, '$1-$2')
      .slice(0, 14); // (XX)XXXXX-XXXX
  };
  const formatFixedPhone = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\(\d{2}\)\d{4})(\d)/, '$1-$2')
      .slice(0, 13); // (XX)XXXX-XXXX
  };
  // Validação de CPF (Algoritmo do Digito Verificador)
  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
    return true;
  };
  // Busca endereço via API ViaCEP
  const fetchAddress = async (cep) => {
    try {
      const cleanCep = cep.replace(/[^\d]/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        });
        setFormData((prev) => ({
          ...prev,
          enderecoCompleto: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
        }));
      } else {
        setAddress({});
        setFormData((prev) => ({ ...prev, enderecoCompleto: '' }));
      }
    } catch (error) {
      setAddress({});
      setFormData((prev) => ({ ...prev, enderecoCompleto: '' }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === 'cpf') formattedValue = formatCPF(value);
    if (name === 'cep') formattedValue = formatCEP(value);
    if (name === 'telefoneCelular') formattedValue = formatMobilePhone(value);
    if (name === 'telefoneFixo') formattedValue = formatFixedPhone(value);
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    if (name === 'cep' && value.replace(/[^\d]/g, '').length === 8) {
      fetchAddress(value);
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    else if (!/^[a-zA-Z\s]{2,40}$/.test(formData.nome)) newErrors.nome = 'Nome deve ter de 2 a 40 caracteres.';
    if (!formData.sobrenome) newErrors.sobrenome = 'Sobrenome é obrigatório';
    else if (!/^[a-zA-Z\s]{2,80}$/.test(formData.sobrenome)) newErrors.sobrenome = 'Sobrenome deve ter de 2 a 80 caracteres.';
    if (!formData.dataNascimento) newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    if (!formData.sexo) newErrors.sexo = 'Sexo é obrigatório';
    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    else if (!validateCPF(formData.cpf)) newErrors.cpf = 'CPF inválido';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório';
    if (!formData.telefoneCelular) newErrors.telefoneCelular = 'Telefone celular é obrigatório';
    else if (!/^\(\d{2}\)\d{5}-\d{4}$/.test(formData.telefoneCelular)) newErrors.telefoneCelular = 'Formato inválido (XX)XXXXX-XXXX';
    if (!formData.telefoneFixo) newErrors.telefoneFixo = 'Telefone fixo é obrigatório';
    else if (!/^\(\d{2}\)\d{4}-\d{4}$/.test(formData.telefoneFixo)) newErrors.telefoneFixo = 'Formato inválido (XX)XXXX-XXXX';
    if (!formData.enderecoCompleto) newErrors.enderecoCompleto = 'Endereço é obrigatório';
    if (!formData.login) newErrors.login = 'Login é obrigatório';
    else if (!/^[a-zA-Z]{6,}$/.test(formData.login)) newErrors.login = 'Login deve ter no mínimo 6 caracteres alfabéticos';
    // Validação da senha: mínimo 8 caracteres e pelo menos um caractere especial
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    else if (!/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(formData.senha)) newErrors.senha = 'A senha deve ter no mínimo 8 caracteres e incluir pelo menos um caractere especial.';
    if (formData.senha !== formData.confirmaSenha) newErrors.confirmaSenha = 'Senhas não coincidem';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Armazena os dados do usuário no sessionStorage (serão apagados ao fechar a aba/navegador)
      sessionStorage.setItem('userData', JSON.stringify(formData));
      // Redireciona para a página de restaurantes
      router.push('/restaurantes');
    }
  };
  const handleClear = () => {
    setFormData({
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      sexo: '',
      cpf: '',
      email: '',
      telefoneCelular: '',
      telefoneFixo: '',
      cep: '',
      enderecoCompleto: '',
      login: '',
      senha: '',
      confirmaSenha: ''
    });
    setErrors({});
    setAddress({});
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Pedido Agora Logo" width={150} height={150} />
        </div>
        <h1 className="mb-6 text-2xl font-bold text-center text-red-600 dark:text-red-400">Cadastro</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.nome && <p className="text-sm text-red-600">{errors.nome}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.sobrenome && <p className="text-sm text-red-600">{errors.sobrenome}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.dataNascimento && <p className="text-sm text-red-600">{errors.dataNascimento}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sexo</label>
            <select
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.sexo && <p className="text-sm text-red-600">{errors.sexo}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">CPF</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="XXX.XXX.XXX-XX"
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.cpf && <p className="text-sm text-red-600">{errors.cpf}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone Celular</label>
            <input
              type="text"
              name="telefoneCelular"
              value={formData.telefoneCelular}
              onChange={handleChange}
              placeholder="(XX)XXXXX-XXXX"
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.telefoneCelular && <p className="text-sm text-red-600">{errors.telefoneCelular}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone Fixo</label>
            <input
              type="text"
              name="telefoneFixo"
              value={formData.telefoneFixo}
              onChange={handleChange}
              placeholder="(XX)XXXX-XXXX"
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.telefoneFixo && <p className="text-sm text-red-600">{errors.telefoneFixo}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">CEP</label>
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="XXXXX-XXX"
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Endereço Completo</label>
            <input
              type="text"
              name="enderecoCompleto"
              value={formData.enderecoCompleto}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.enderecoCompleto && <p className="text-sm text-red-600">{errors.enderecoCompleto}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Login</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.login && <p className="text-sm text-red-600">{errors.login}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.senha && <p className="text-sm text-red-600">{errors.senha}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmação da Senha</label>
            <input
              type="password"
              name="confirmaSenha"
              value={formData.confirmaSenha}
              onChange={handleChange}
              className="w-full p-3 mt-1 text-black border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 bg-yellow-50 dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.confirmaSenha && <p className="text-sm text-red-600">{errors.confirmaSenha}</p>}
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full p-3 text-white transition bg-red-600 rounded-md dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full p-3 text-gray-700 transition bg-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500"
            >
              Limpar Tela
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}