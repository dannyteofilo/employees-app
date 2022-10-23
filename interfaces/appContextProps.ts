import { Dispatch } from "react";
import { Employees } from "./employees";
import { User } from "./user";

export interface AppContextProps {
  data: Array<Employees>;
  setData: Dispatch<Array<Employees>>;
}
