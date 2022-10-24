import { Dispatch } from "react";
import { EmployeesInterface } from "./employees";
import { User } from "./user";

export interface AppContextProps {
  data: Array<EmployeesInterface>;
  setData: Dispatch<Array<EmployeesInterface>>;
  setLoading: Dispatch<boolean>;
  loading: boolean;
}
