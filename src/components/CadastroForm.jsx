'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CadastroForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    sexo: '',
    nomeMaterno: '',
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
      .slice(0, 14);
  };

  const formatFixedPhone = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\(\d{2}\)\d{4})(\d)/, '$1-$2')
      .slice(0, 13);
  };

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
    if (!formData.nomeCompleto) newErrors.nomeCompleto = 'Nome é obrigatório';
    else if (!/^[a-zA-Z\s]{15,80}$/.test(formData.nomeCompleto)) newErrors.nomeCompleto = 'Nome deve ter 15-80 caracteres alfabéticos';

    if (!formData.dataNascimento) newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    if (!formData.sexo) newErrors.sexo = 'Sexo é obrigatório';
    if (!formData.nomeMaterno) newErrors.nomeMaterno = 'Nome materno é obrigatório';
    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    else if (!validateCPF(formData.cpf)) newErrors.cpf = 'CPF inválido';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório';
    if (!formData.telefoneCelular) newErrors.telefoneCelular = 'Telefone celular é obrigatório';
    else if (!/^\(\d{2}\)\d{5}-\d{4}$/.test(formData.telefoneCelular)) newErrors.telefoneCelular = 'Formato inválido (XX)XXXXX-XXXX';
    if (!formData.telefoneFixo) newErrors.telefoneFixo = 'Telefone fixo é obrigatório';
    else if (!/^\(\d{2}\)\d{4}-\d{4}$/.test(formData.telefoneFixo)) newErrors.telefoneFixo = 'Formato inválido (XX)XXXX-XXXX';
    if (!formData.enderecoCompleto) newErrors.enderecoCompleto = 'Endereço é obrigatório';
    if (!formData.login) newErrors.login = 'Login é obrigatório';
    else if (!/^[a-zA-Z]{6}$/.test(formData.login)) newErrors.login = 'Login deve ter exatamente 6 caracteres alfabéticos';
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    else if (!/^[a-zA-Z]{8}$/.test(formData.senha)) newErrors.senha = 'Senha deve ter exatamente 8 caracteres alfabéticos';
    if (formData.senha !== formData.confirmaSenha) newErrors.confirmaSenha = 'Senhas não coincidem';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push('/restaurantes');
    }
  };

  const handleClear = () => {
    setFormData({
      nomeCompleto: '',
      dataNascimento: '',
      sexo: '',
      nomeMaterno: '',
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
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Pedido Agora Logo" width={150} height={150} />
        </div>
        <h1 className="text-2xl font-bold text-center text-red-600 dark:text-white mb-6">Cadastro</h1>
        {/* ...formulário continua aqui, já corretamente identado */}
      </div>
    </div>
  );
}
