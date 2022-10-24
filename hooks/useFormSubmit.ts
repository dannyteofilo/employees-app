import { useAppContext } from "../context/AppContext";
import { addEmployee, getEmployees } from "../helpers/request";
import { Employees } from "../interfaces/employees";
import { dateUtil } from "../utils/date";

export const useFormSubmit = () => {
  const { data, setData } = useAppContext();

  const handleGetEmployees = () => {
    getEmployees().then((resp) => {
      const { data } = resp;
      setData(data.employees);
    });
  };

  const handleAddEmployee = (form: Employees) => {
    const { birthday } = form;
    addEmployee({ ...form, birthday: dateUtil(birthday) }).then((resp) => {
      if (resp.success) {
        handleGetEmployees();
      }
    });
  };
  return {
    handleGetEmployees,
    handleAddEmployee,
  };
};
