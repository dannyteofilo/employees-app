import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { StyledLogin } from "./login.styles";

const Login = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", credentials);
      if (response.status === 200) {
        router.push("/employees");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledLogin>
      <h1>Login Employees App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
        className="input"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <Input
        className="input"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Button className="button"><i className="fa-solid fa-unlock"></i> Login</Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
