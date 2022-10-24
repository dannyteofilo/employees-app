import React, { createContext, useContext, useState } from "react";
import { AppContextProps } from "../interfaces/appContextProps";
import { EmployeesInterface } from "../interfaces/employees";

export const AppContext = createContext<AppContextProps | undefined>(undefined);
const Provider = AppContext.Provider;

export const AppProvider = ({ children }: any) => {
    const [data, setData] = useState<Array<EmployeesInterface>>([]);
    const [loading, setLoading] = useState<boolean>(false)
    return <Provider value={{ data, setData, loading, setLoading }}>{children}</Provider>;
};

export const useAppContext = () => {
    const context = useContext<AppContextProps | undefined>(AppContext);
    if (context === undefined) {
        throw new Error("Error");
    }
    return context;
};
