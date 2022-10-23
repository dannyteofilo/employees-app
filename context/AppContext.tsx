import React, { createContext, useContext, useState } from "react";
import { AppContextProps } from "../interfaces/appContextProps";
import { Employees } from "../interfaces/employees";

export const AppContext = createContext<AppContextProps | undefined>(undefined);
const Provider = AppContext.Provider;

export const AppProvider = ({ children }: any) => {
  const [data, setData] = useState<Array<Employees>>([]);
  return <Provider value={{ data, setData }}>{children}</Provider>;
};

export const useAppContext = () => {
  const context = useContext<AppContextProps | undefined>(AppContext);
  if (context === undefined) {
    throw new Error("Error");
  }
  return context;
};
