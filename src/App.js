import React, { useState, useEffect } from "react";
import GlobalStyle from "./Styles/global";
import MyForm from "./components/myform";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";

// Estilizando o Container usando styled-components
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

// Estilizando o Title
const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

// Estilizando a Tabela para ser responsiva e caber no container
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  overflow-x: auto;
  display: block;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
`;

// Cabeçalho da Tabela
const Thead = styled.thead`
  background-color: #f5f5f5;
  display: table;
  width: 100%;
`;

// Estilizando as células do cabeçalho com largura definida e ajustes de responsividade
const Th = styled.th`
  padding: 8px;  // Aumentei um pouco o padding para mais espaçamento
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-size: 14px;
  min-width: ${(props) => props.minWidth || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }
`;

// Corpo da Tabela
const Tbody = styled.tbody`
  display: table;
  width: 100%;
  background-color: #fff;
`;

// Linhas da Tabela
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

// Células da Tabela com largura correspondente e ajustes de responsividade
const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  min-width: ${(props) => props.minWidth || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }
`;

// Componente Grid para exibir os dados em uma tabela
const Grid = ({ users }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th minWidth="100px" maxWidth="150px">Nome</Th>
          <Th minWidth="150px" maxWidth="250px">Endereço</Th>
          <Th minWidth="100px" maxWidth="150px">Setor</Th>
          <Th minWidth="100px" maxWidth="150px">Telefone</Th>
          <Th minWidth="100px" maxWidth="150px">Conta Bancária</Th>
          <Th minWidth="100px" maxWidth="150px">CPF</Th>
          <Th minWidth="80px" maxWidth="120px">RG</Th>
          <Th minWidth="150px" maxWidth="200px">Data de Nascimento</Th>
          <Th minWidth="150px" maxWidth="200px">Data de Admissão</Th>
          <Th minWidth="200px" maxWidth="250px">Email</Th>
          <Th minWidth="100px" maxWidth="150px">Função</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <Tr key={index}>
              <Td minWidth="100px" maxWidth="150px">{user.nome}</Td>
              <Td minWidth="150px" maxWidth="250px">{user.endereco}</Td>
              <Td minWidth="100px" maxWidth="150px">{user.setor}</Td>
              <Td minWidth="100px" maxWidth="150px">{user.telefone}</Td>
              <Td minWidth="100px" maxWidth="150px">{user.conta_bancaria}</Td>
              <Td minWidth="100px" maxWidth="150px">{user.cpf}</Td>
              <Td minWidth="80px" maxWidth="120px">{user.rg}</Td>
              <Td minWidth="150px" maxWidth="200px">{new Date(user.data_nascimento).toLocaleDateString()}</Td>
              <Td minWidth="150px" maxWidth="200px">{new Date(user.data_admissao).toLocaleDateString()}</Td>
              <Td minWidth="200px" maxWidth="250px">{user.email}</Td>
              <Td minWidth="100px" maxWidth="150px">{user.funcao}</Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td colSpan="11">Nenhum funcionário encontrado</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

function App() {
  const [users, setUsers] = useState([]);  // Estado para armazenar os dados dos usuários

  // Função para buscar os dados do back-end
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/users");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));  // Ordenando os dados pelo nome
    } catch (error) {
      toast.error("Erro ao buscar os dados: " + error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>Cadastro Funcionário Evaldo AutoPeças</Title>
        <MyForm />  {/* Formulário para cadastro */}
        <Grid users={users} />  {/* Exibindo os dados no componente Grid */}
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
