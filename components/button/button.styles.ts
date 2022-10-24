import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonProps } from "./Button";

const variants = ({ variant }: ButtonProps): FlattenSimpleInterpolation => {
  switch (variant) {
    case "secondary":
      return css`
        color: rgba(0, 0, 0, 0.85);
        background: #ffffff;
        border: 1px solid #d9d9d9;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
        border-radius: 2px;
        &:hover {
          background: #ffffff;
          border: 1px solid #40a9ff;
          box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
          border-radius: 2px;
        }
      `;
    default:
      return css`
        color: white;
        background: #1890ff;
        border: 1px solid #1890ff;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border-radius: 2px;
        &:hover {
          background: #40a9ff;
          border: 1px solid #40a9ff;
          border-radius: 2px;
        }
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  width: 114px;
  height: 40px;
  ${variants}
`;
