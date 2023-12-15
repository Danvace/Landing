import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 400px;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  margin: 10px 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const RegisterLink = styled.p`
  margin-top: 20px;
  text-align: center;

  a {
    color: #007bff;
  }
`;