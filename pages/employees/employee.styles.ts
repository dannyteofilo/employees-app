import styled from "styled-components";

export const StyledEmployee = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
    .title{
        height: 131px;
        background: #FFFFFF;
        display: flex;
        align-items: flex-end;
    }
    .content{
        width: 90%;
        height: 80vh;
        margin: 0 auto;
        background: #FFFFFF;
        margin-top: 2em;
        padding: 2em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        >.search,.add{
            width: 50%;
        }

        >.search{
            display: flex;
            flex-direction: column;
  
        }

        >.add{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
        }
    }
`;
