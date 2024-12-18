import React, { useState } from "react";
import styled from "styled-components";
import  postUsers from "../App.js"


// Container do formulário com os inputs alinhados na vertical
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // Espaçamento entre os inputs
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

// Estilizando cada input para um visual mais uniforme
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

// Estilizando o botão de envio
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const MyForm = ({ postUsers }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    setor: "",
    telefone: "",
    conta_bancaria: "",
    cpf: "",
    rg: "",
    data_nascimento: "",
    data_admissão: "", // Campo "Data de Admissão" reintegrado
    email: "",
    funcao: "",
    salario_base: "",
    bonificacao: "",
  });

  // Função para atualizar o estado com base nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
     
      postUsers(formData);

    
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
      funcao: "",
      salario_base: "",
      bonificacao: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>
        Nome:
        <Input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite o nome"
        />
      </label>
      <label>
        Endereço:
        <Input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Digite o endereço"
        />
      </label>
      <label>
        Setor:
        <Input
          type="text"
          name="setor"
          value={formData.setor}
          onChange={handleChange}
          placeholder="Digite o setor"
        />
      </label>
      <label>
        Telefone:
        <Input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Digite o telefone"
        />
      </label>
      <label>
        Conta Bancária:
        <Input
          type="text"
          name="conta_bancaria"
          value={formData.conta_bancaria}
          onChange={handleChange}
          placeholder="Digite a conta bancária"
        />
      </label>
      <label>
        CPF:
        <Input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="Digite o CPF"
        />
      </label>
      <label>
        RG:
        <Input
          type="text"
          name="rg"
          value={formData.rg}
          onChange={handleChange}
          placeholder="Digite o RG"
        />
      </label>
      <label>
        Data de Nascimento:
        <Input
          type="date"
          name="data_nascimento"
          value={formData.data_nascimento}
          onChange={handleChange}
        />
      </label>
      <label>
        Data de Admissão:
        <Input
          type="date"
          name="data_admissão"
          value={formData.data_admissão}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite o email"
        />
      </label>
      <label>
        Função:
        <Input
          type="text"
          name="funcao"
          value={formData.funcao}
          onChange={handleChange}
          placeholder="Digite a função"
        />
      </label>
      <label>
        Salário Base:
        <Input
          type="number"
          name="salario_base"
          value={formData.salario_base}
          onChange={handleChange}
          placeholder="Digite o salário base"
        />
      </label>
      <label>
        Bonificação:
        <Input
          type="number"
          name="bonificacao"
          value={formData.bonificacao}
          onChange={handleChange}
          placeholder="Digite a bonificação"
        />
      </label>
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};

export default MyForm;
