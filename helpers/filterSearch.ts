import { EmployeesInterface } from "../interfaces/employees";

export const filterSearch = (data: Array<EmployeesInterface>, search: string) => {
  return data.filter((el: EmployeesInterface) =>
    el.name.toLowerCase().indexOf(search.toLowerCase()) >-1
  );
};
