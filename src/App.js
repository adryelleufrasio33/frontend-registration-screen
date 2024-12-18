import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./Styles/global";
import MyForm from "./components/EmployeeForm"; 
import Grid from "./components/Grid";
import SalaryForm from "./components/SalaryForm";
import SalaryGrid from "./components/SalaryGrid";
import styled from "styled-components";
import axios from "axios";

// Estilos globais e do container
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

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  background-color: #333;
  color: white;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
  width: 100%;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [salaries, setSalaries] = useState([]);

  // Requisição GET para buscar funcionários
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Erro ao buscar os funcionários:", error.message);
    }
  };

  // Requisição Post para  cadastrar  funcionários
  const postUsers = async (formData) => {

    try {
      const res = await axios.post("http://localhost:8800/users", formData);

      const usersData = await axios.get("http://localhost:8800/users");
      setUsers(usersData.data);
      alert(res.data.message)
    } catch (error) {
      alert(error.response.data.error)
      console.error("Erro ao cadastrar o funcionário:", error.message);

    }
  };
  // Requisição GET para buscar salários
  const getSalaries = async () => {
    try {
      const res = await axios.get("http://localhost:8800/salarios");
      setSalaries(res.data);
    } catch (error) {
      console.error("Erro ao buscar os salários:", error.message);
    }
  };

  useEffect(() => {
    getUsers();
    getSalaries();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header>
        <Logo src="/logo.png" alt="Logo da Empresa" />
        <Title>Evaldo AutoPeças</Title>
        <NavLinks>
          <Link to="/">Cadastro</Link>
          <Link to="/salarios">Registrar Salário</Link>
          <Link to="/consultar-salarios">Consultar Salários</Link>
        </NavLinks>
      </Header>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyForm postUsers={postUsers} />
                <Grid users={users} />
              </>
            }
          />
          <Route
            path="/salarios"
            element={<SalaryForm postSalary={postSalary} />}
          />
          <Route
            path="/consultar-salarios"
            element={<SalaryGrid salaries={salaries} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

const postSalary = async (url,formData) => {
  


  try {
    const res = await axios.post(url, formData);

   
   
  //  alert(res.data.message)
  } catch (error) {
    console.error("Erro ao cadastrar o sálario:", error.message);
  }
};

export default App;
