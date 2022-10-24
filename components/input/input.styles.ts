import styled from "styled-components";
import { InputProps } from "./Input";

export const StyledInput = styled.input<InputProps>`
  width: 300px;
  height: 40px;
  left: 22px;
  top: 28px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: none;

  &:focus {
    background: #ffffff;
    border: 1px solid #1890ff;
    border-radius: 2px;
  }

  & ~ span {
          color: red;
        }
`;
