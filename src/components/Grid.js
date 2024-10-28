import React from "react";

const Grid = ({ users }) => {
  return (
    <table>
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
              <td>{user.dataNascimento}</td>
              <td>{user.dataAdmissao}</td>
              <td>{user.email}</td>
              <td>{user.funcao}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="11">Nenhum funcionário encontrado</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Grid;
