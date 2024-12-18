import React, { useState } from "react";

const formatCurrency = (value) => {
  return value
    ? value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "N/A";
};

const SalaryGrid = ({ salaries = [] }) => {
  const [filteredSalaries, setFilteredSalaries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");

  const handleFilter = () => {
    const filtered = salaries.filter(
      (salary) =>
        (!nameFilter || salary.nome.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (!monthFilter || salary.mes_ano === monthFilter)
    );
    setFilteredSalaries(filtered);
  };

  return (
    <div style={{ overflowX: "auto", marginTop: "20px" }}>
      {/* Filtros */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <input
          type="month"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleFilter}
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Filtrar
        </button>
      </div>

      {/* Tabela */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Funcionário</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mês/Ano</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Dias Trabalhados</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Vale Transporte</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Vale Refeição</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Bônus Família</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Premiação/Bonificação</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>INSS</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>FGTS</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Adiantamentos</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Salário Líquido</th>
          </tr>
        </thead>
        <tbody>
          {(filteredSalaries.length > 0 ? filteredSalaries : salaries).length > 0 ? (
            (filteredSalaries.length > 0 ? filteredSalaries : salaries).map((salary, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{salary.nome}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{salary.mes_ano}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{salary.dias_trabalhados}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.vale_transporte)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.vale_almoco)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.bonus_familia)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.outros_bonus)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.inss)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.fgts)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.adiantamentos)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatCurrency(salary.salario_liquido)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" style={{ textAlign: "center", padding: "8px", border: "1px solid #ddd" }}>
                Nenhum salário registrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryGrid;
