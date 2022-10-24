import styled from "styled-components";

export const StyledUpload = styled.div`
  width: 100;
  .title {
    height: 131px;
    background: #ffffff;
    display: flex;
    align-items: flex-end;
  }
  .content {
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    background: #ffffff;
    margin-top: 2em;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .drag-container {
    width: 496px;
    height: 136px;
    background: #f0f5ff;
    border: 1px dashed #7b61ff;
    border-radius: 5px;
    padding: 1em;

    > .upload {
      width: 104px;
      height: 104px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fafafa;
      border: 1px dashed #d9d9d9;
      border-radius: 2px;
      flex: none;
      order: 2;
      flex-grow: 0;
    }
  }
`;
