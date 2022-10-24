import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input{
        margin: 20px 0;
    }
    .button{
        margin: 10px 0;
    }
  }
`;
