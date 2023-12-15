import React from 'react';
import {AuthButton, AuthContainer} from "./Auth.styled";


export default function Auth() {

    return (
        <AuthContainer>
            <h1>If you want have access to this page you need to register or login</h1>
            <AuthButton to="/register">Register</AuthButton>
            <p>Already have an account?</p>
            <AuthButton to="/login">Login here</AuthButton>
        </AuthContainer>
    );
}
