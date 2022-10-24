import styled from "styled-components";

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 276px;
  position: absolute;
  width: 208px;
  height: 95vh;
  left: 0;
  top: 60px;
  bottom: 3px;
  background: #ffffff;
  box-shadow: 0px 2;

  .list {
    list-style: none;
    padding: 0;
    > .item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 200px;
      height: 40px;
      &:hover{
        cursor: pointer;
        background: #E6F7FF;
      }
    }
  }

  .active{
    background: #E6F7FF;
  }
`;
