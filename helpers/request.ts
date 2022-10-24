import { EmployeesInterface } from "../interfaces/employees";

const apiUrl = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/";

export const getEmployees = async () => {
  const url = `${apiUrl}/examen/employees/:juan_perez`;
  const resp: any = await fetch(url);
  return await resp.json();
};

export const addEmployee = async (data: EmployeesInterface) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url = `${apiUrl}/examen/employees/:juan_perez`;
  const resp: any = await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  });
  return await resp.json();
};
