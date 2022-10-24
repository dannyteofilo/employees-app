import { useAppContext } from "../context/AppContext";
import { addEmployee, getEmployees } from "../helpers/request";
import { EmployeesInterface } from "../interfaces/employees";
import { dateUtil } from "../utils/date";

export const useFormSubmit = () => {
  const { setData, setLoading } = useAppContext();

  const handleGetEmployees = () => {
    setLoading(true);
    getEmployees().then((resp) => {
      const { data } = resp;
      setData(data.employees);
      setLoading(false);
    });
  };

  const handleAddEmployee = (form: EmployeesInterface) => {
    const { birthday } = form;
    setLoading(true);
    addEmployee({ ...form, birthday: dateUtil(birthday) }).then((resp) => {
      if (resp.success) {
        handleGetEmployees();
        setLoading(false);
      }
    });
  };
  return {
    handleGetEmployees,
    handleAddEmployee,
  };
};
