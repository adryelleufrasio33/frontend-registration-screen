import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Permite rolagem horizontal em telas pequenas */
  margin-top: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: "Arial", sans-serif;

  thead {
    background-color: #333;
    color: #fff;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-child(odd) {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    th,
    td {
      font-size: 12px; /* Reduz o tamanho da fonte em telas menores */
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      font-size: 10px; /* Reduz ainda mais para telas muito pequenas */
      padding: 8px;
    }
  }
`;

const formatDate = (dateString) => {
  if (!dateString) return "N/A"; // Caso a data seja nula ou indefinida
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Grid = ({ users = [] }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Setor</th>
            <th>Telefone</th>
            <th>Conta Bancária</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Data de Nascimento</th>
            <th>Data de Admissão</th>
            <th>Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.nome}</td>
                <td>{user.endereco}</td>
                <td>{user.setor}</td>
                <td>{user.telefone}</td>
                <td>{user.conta_bancaria}</td>
                <td>{user.cpf}</td>
                <td>{user.rg}</td>
                <td>{formatDate(user.data_nascimento)}</td>
                <td>{formatDate(user.data_admissao)}</td>
                <td>{user.email}</td>
                <td>{user.funcao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" style={{ textAlign: "center" }}>
                Nenhum funcionário encontrado
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Grid;
