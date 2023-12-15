import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import {ErrorText, LoginContainer, LoginForm, RegisterLink, StyledButton, StyledInput, Title} from "./Login.styled";
import {login} from "../../api";

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const a = await login(values);
                if (!a) {
                    alert("Invalid email or password.")
                }
                navigate('/');
                window.location.reload();
            } catch (error) {
                if (error.message === 'Invalid email or password.') {
                    setErrorMessage(error.message);
                } else {
                    console.error('Login failed:', error);
                }
            }
        },
    });

    return (
        <LoginContainer>
            <Title>Login</Title>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            <LoginForm onSubmit={formik.handleSubmit}>
                <StyledInput
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email"
                />
                {formik.touched.email && formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
                <StyledInput
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                />
                {formik.touched.password && formik.errors.password && (
                    <ErrorText>{formik.errors.password}</ErrorText>
                )}
                <StyledButton type="submit" disabled={!formik.isValid}>
                    Login
                </StyledButton>
            </LoginForm>
            <RegisterLink>
                Don't have an account? <Link to="/register">Register</Link>
            </RegisterLink>
        </LoginContainer>
    );
};

export default Login;