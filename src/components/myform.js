import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    setor: "",
    telefone: "",
    conta_bancaria: "",
    cpf: "",
    rg: "",
    data_nascimento: "",
    data_admissão: "",
    email: "",
    funcao: ""
  });

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar os dados do formulário ao back-end
  const handleSubmit = async (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário
    try {
      await axios.post("http://localhost:8800/users", formData);  // Envia os dados ao servidor
      toast.success("Funcionário cadastrado com sucesso!");  // Exibe uma mensagem de sucesso
      // Limpar o formulário após o cadastro bem-sucedido
      setFormData({
        nome: "",
        endereco: "",
        setor: "",
        telefone: "",
        conta_bancaria: "",
        cpf: "",
        rg: "",
        data_nascimento: "",
        data_admissão: "",
        email: "",
        funcao: ""
      });
    } catch (error) {
      toast.error("Erro ao cadastrar funcionário: " + error.message);  // Exibe uma mensagem de erro
    }
  };

  // Certifique-se de que o JSX (return) está dentro da função
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
      <input type="text" name="setor" placeholder="Setor" value={formData.setor} onChange={handleChange} />
      <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
      <input type="text" name="conta_bancaria" placeholder="Conta Bancária" value={formData.conta_bancaria} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="text" name="rg" placeholder="RG" value={formData.rg} onChange={handleChange} />
      <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} />
      <input type="date" name="data_admissão" value={formData.data_admissão} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="funcao" placeholder="Função" value={formData.funcao} onChange={handleChange} />
      <button type="submit">Cadastrar Funcionário</button>
    </form>
  );
};

export default MyForm;
