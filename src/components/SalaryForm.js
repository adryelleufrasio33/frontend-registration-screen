import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Importando axios para enviar os dados ao back-end
import postSalary from "../App.js";

// Estilização dos componentes
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const SalaryForm = ({postSalary}) => {
  const [selectedRole, setSelectedRole] = useState(""); // Estado para o tipo de funcionário
  const [formData, setFormData] = useState({}); // Estado para os dados do formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Campo atualizado:", name, "->", value); // Log para cada alteração no formulário
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setFormData({}); // Limpa os dados do formulário ao mudar o tipo
    console.log("Tipo de funcionário selecionado:", e.target.value); // Log para o tipo de funcionário
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Por favor, selecione o tipo de funcionário.");
      console.error("Erro: Tipo de funcionário não foi selecionado.");
      return;
    }
  
    // Definir a URL dinamicamente com base no tipo selecionado
    let url = "";
    switch (selectedRole) {
      case "loja":
        url = "http://localhost:8800/store/salary";
        break;
      case "motoqueiro":
        url = "http://localhost:8800/motorcycle/salary";
        break;
      case "mecanico":
        url = "http://localhost:8800/mechanic/salary";
        break;
      case "vendedor":
        url = "http://localhost:8800/sales/salary";
        break;
      default:
        console.error("Tipo de funcionário inválido.");
        return;
    }
  
    console.log("URL selecionada:", url);
    console.log("Dados enviados para o servidor:", { ...formData, tipo: selectedRole });
  
    try {
      // Enviando os dados para a URL configurada
      const response = await axios.post(url, {
        ...formData,
        tipo: selectedRole, // Incluindo o tipo do funcionário
      });
      console.log(url)
      console.log("Resposta do servidor:", response.data);
    
      alert("Salário registrado com sucesso!");
    } catch (error) {
      
      alert(error.response.data.error);
    }
  };
  
  const renderFields = () => {
    if (!selectedRole) {
      return <p>Selecione um tipo de funcionário para continuar.</p>;
    }

    return (
      <>
        {/* Campo de calendário para selecionar o mês */}
        <Input
          name="mes"
          type="month"
          placeholder="Mês do Registro"
          value={formData.mes || ""}
          onChange={handleChange}
        />
        {selectedRole === "loja" && (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="dias_trabalhados" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="salario" placeholder="Salário" onChange={handleChange} />
            <Input name="vale_alimentacao" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="vale_transporte" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="bonus_familia" placeholder="Bônus Família" onChange={handleChange} />
            <Input name="inss" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        )}
        {selectedRole === "motoqueiro" && (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="premiacao_entrega" placeholder="Premiação por Entrega" onChange={handleChange} />
            <Input name="periculosidade" placeholder="Periculosidade" onChange={handleChange} />
            <Input name="aluguel_moto" placeholder="Aluguel da Moto" onChange={handleChange} />
            <Input name="dias_trabalhados" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="vale_alimentacao" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="combustivel" placeholder="Combustível" onChange={handleChange} />
            <Input name="inss" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        )}
        {selectedRole === "mecanico" && (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="comissao" placeholder="Comissão" onChange={handleChange} />
            <Input name="vale_transporte" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="vale_alimentacao" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="dias_trabalhados" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="inss" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        )}
        {selectedRole === "vendedor" && (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="salario" placeholder="Salário" onChange={handleChange} />
            <Input name="comissao" placeholder="Comissão" onChange={handleChange} />
            <Input name="vale_transporte" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="vale_alimentacao" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="inss" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        )}
      </>
    );
  };

  return (
    <FormContainer>
      <h2>Registrar Salário</h2>
      <Select value={selectedRole} onChange={handleRoleChange}>
        <option value="">Selecione o tipo de funcionário</option>
        <option value="loja">Loja</option>
        <option value="motoqueiro">Motoqueiro</option>
        <option value="mecanico">Mecânico</option>
        <option value="vendedor">Vendedor</option>
      </Select>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <Button type="submit">Registrar</Button>
      </form>
    </FormContainer>
  );
};

export default SalaryForm;
