import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {register} from '../../api';
import {RegisterButton, RegisterContainer, RegisterForm} from "./Registration.styled";
import {Input} from "antd";
import {ErrorText, Title} from "../Login/Login.styled";

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                await register(values);
                navigate('/');
                window.location.reload();
            } catch (error) {
                console.error('Registration failed:', error);
            }
        },
    });

    return (
        <RegisterContainer>
            <Title>Register</Title>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    placeholder="First Name"
                />
                {formik.touched.firstName && formik.errors.firstName &&
                    <ErrorText>{formik.errors.firstName}</ErrorText>}
                <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    placeholder="Last Name"
                />
                {formik.touched.lastName && formik.errors.lastName && <ErrorText>{formik.errors.lastName}</ErrorText>}
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email"
                />
                {formik.touched.email && formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                />
                {formik.touched.password && formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}
                <RegisterButton type="submit" disabled={!formik.isValid}>
                    Register
                </RegisterButton>
            </RegisterForm>
        </RegisterContainer>
    );
};

export default Register;