import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const EmployeeSelector = ({ value, onChange }) => {
  return (
    <Select name="tipo_funcionario" value={value} onChange={onChange}>
      <option value="">Selecione o Tipo de Funcionário</option>
      <option value="loja">Loja</option>
      <option value="motoqueiro">Motoqueiro</option>
      <option value="mecanico">Mecânico</option>
      <option value="vendedor">Vendedor</option>
    </Select>
  );
};

export default EmployeeSelector;
