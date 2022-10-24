import styled from "styled-components";

export const StyledTable = styled.div`
  max-height: 900px;
  overflow: auto; 

  table {
    border-collapse: collapse;
    font-family: Tahoma, Geneva, sans-serif;
  }
  table td {
    padding: 15px;
  }
  table thead td {
    background-color: #54585d;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #54585d;
  }
  table tbody td {
    color: #636363;
    border: 1px solid #dddfe1;
  }
  table tbody tr {
    background-color: #f9fafb;
  }
  table tbody tr:nth-child(odd) {
    background-color: #ffffff;
  }
`;