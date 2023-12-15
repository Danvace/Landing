import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;