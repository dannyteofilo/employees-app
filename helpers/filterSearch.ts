import { Employees } from "../interfaces/employees";

export const filterSearch = (data: Array<Employees>, search: string) => {
  return data.filter((el: Employees) =>
    el.name.toLowerCase().indexOf(search.toLowerCase()) >-1
  );
};
