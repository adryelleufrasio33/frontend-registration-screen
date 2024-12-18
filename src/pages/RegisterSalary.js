import React, { useState } from "react";
import styled from "styled-components";

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

const SalaryForm = () => {
  const [selectedRole, setSelectedRole] = useState(""); // Estado para o tipo de funcionário
  const [formData, setFormData] = useState({}); // Estado para os dados do formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setFormData({}); // Limpa os dados do formulário ao mudar o tipo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Por favor, selecione o tipo de funcionário.");
      return;
    }
    console.log("Dados enviados:", { ...formData, role: selectedRole });
    alert("Salário registrado com sucesso!");
  };

  const renderFields = () => {
    switch (selectedRole) {
      case "loja":
        return (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="dias_trabalhados" type="number" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="salario" type="number" placeholder="Salário" onChange={handleChange} />
            <Input name="vale_alimentacao" type="number" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="vale_transporte" type="number" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="bonus_familia" type="number" placeholder="Bônus Família" onChange={handleChange} />
            <Input name="inss" type="number" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" type="number" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" type="number" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        );
      case "motoqueiro":
        return (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="premiacao_entrega" type="number" placeholder="Premiação por Entrega" onChange={handleChange} />
            <Input name="periculosidade" type="number" placeholder="Periculosidade" onChange={handleChange} />
            <Input name="aluguel_moto" type="number" placeholder="Aluguel da Moto" onChange={handleChange} />
            <Input name="dias_trabalhados" type="number" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="vale_alimentacao" type="number" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="combustivel" type="number" placeholder="Combustível" onChange={handleChange} />
            <Input name="inss" type="number" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" type="number" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" type="number" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        );
      case "mecanico":
        return (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="comissao" type="number" placeholder="Comissão" onChange={handleChange} />
            <Input name="vale_transporte" type="number" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="vale_alimentacao" type="number" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="dias_trabalhados" type="number" placeholder="Dias Trabalhados" onChange={handleChange} />
            <Input name="inss" type="number" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" type="number" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" type="number" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        );
      case "vendedor":
        return (
          <>
            <Input name="nome" placeholder="Nome" onChange={handleChange} />
            <Input name="salario" type="number" placeholder="Salário" onChange={handleChange} />
            <Input name="comissao" type="number" placeholder="Comissão" onChange={handleChange} />
            <Input name="vale_transporte" type="number" placeholder="Vale Transporte" onChange={handleChange} />
            <Input name="vale_alimentacao" type="number" placeholder="Vale Alimentação" onChange={handleChange} />
            <Input name="inss" type="number" placeholder="INSS" onChange={handleChange} />
            <Input name="fgts" type="number" placeholder="FGTS" onChange={handleChange} />
            <Input name="adiantamentos" type="number" placeholder="Adiantamentos" onChange={handleChange} />
          </>
        );
      default:
        return <p>Selecione um tipo de funcionário para continuar.</p>;
    }
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
