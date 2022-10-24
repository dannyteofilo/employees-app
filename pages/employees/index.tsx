import React, { useEffect, useState } from "react";
import { FormAdd } from "../../components/formAdd/FormAdd";
import FormSearch from "../../components/FormSearch";
import Loader from "../../components/loader/Loader";
import Table from "../../components/table/Table";
import { useAppContext } from "../../context/AppContext";
import { filterSearch } from "../../helpers/filterSearch";
import { useFormSubmit } from "../../hooks/useFormSubmit";
import { EmployeesInterface } from "../../interfaces/employees";
import { Dashboard } from "../../templates/dashboard";
import { StyledEmployee } from "./employee.styles";

const Employees = () => {
  const [employees, setEmployees] = useState<Array<EmployeesInterface>>([]);
  const { handleGetEmployees, handleAddEmployee } = useFormSubmit();
  const { data, loading } = useAppContext();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    handleGetEmployees();
  }, []);

  useEffect(() => {
    setEmployees(data);
  }, [data]);

  useEffect(() => {
    if (search !== "") {
      setEmployees(filterSearch(data, search));
    } else {
      setEmployees((e) => data);
    }
  }, [search]);

  const handleChangeInput = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Dashboard>
      <StyledEmployee>
        <div className="title">
          <h1>Employees page</h1>
        </div>
        <section className="content">
          <div className="search">
            <FormSearch handleChange={handleChangeInput} value={search}></FormSearch>
            <Table data={employees}></Table>
          </div>
          <div className="add">
            <h2>Add Employee</h2>
            <FormAdd submit={handleAddEmployee} />
          </div>
        </section>
      </StyledEmployee>
      {
        loading &&
        <Loader />
      }
    </Dashboard>
  );
};

export default Employees;
