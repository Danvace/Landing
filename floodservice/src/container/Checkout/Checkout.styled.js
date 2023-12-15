import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import {Link} from "react-router-dom";

const CheckoutContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CheckoutForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const CheckoutLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const CheckoutButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BackToCartLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 8px 12px;
  background-color: #ddd;
  border-radius: 3px;
`;

const ContinueButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export {
    CheckoutContainer,
    CheckoutTitle,
    CheckoutForm,
    InputContainer,
    CheckoutLabel,
    InputField,
    ErrorMessageStyled,
    CheckoutButtons,
    BackToCartLink,
    ContinueButton
};