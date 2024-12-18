import React from "react";
import styled from "styled-components";
import SalaryGrid from "../components/SalaryGrid";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ViewSalary = () => {
  return (
    <Container>
      <h1>Consultar Salários</h1>
      <SalaryGrid />
    </Container>
  );
};

export default ViewSalary;
