import styled from "styled-components";
import {Link} from "react-router-dom";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  h1, h2 {
    color: honeydew;
  }
`;

export const SuccessImage = styled.img`
  width: 400px; 
  height: auto; 
`;

export const ContinueButton = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #4CAF50; 
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;