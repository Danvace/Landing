import styled from "styled-components";

export const RegisterContainer = styled.div`
    max-width: 400px;
    height: auto;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
  Input {
    margin: 10px 0;
    padding: 10px;
  }
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Error = styled.p`
    color: red;
    margin-top: -10px;
    margin-bottom: 10px;
`;

export const RegisterButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;