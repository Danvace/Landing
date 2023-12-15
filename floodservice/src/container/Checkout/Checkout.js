import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {clearCart} from '../CartPage/cartActions';
import {
    BackToCartLink,
    CheckoutButtons,
    CheckoutContainer,
    CheckoutForm,
    CheckoutLabel,
    CheckoutTitle,
    ContinueButton,
    ErrorMessageStyled,
    InputContainer,
    InputField
} from "./Checkout.styled";
import Auth from "../../component/Auth/Auth";


const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            creditCard: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is a required field'),
            lastName: Yup.string().required('Last name is a required field'),
            email: Yup.string().email('Email is incorrect').required('Email is a required field'),
            phone: Yup.string().matches(/^\+?\d+$/, 'Phone number must contain only numbers and optional + at the beginning').required(
                'Phone number is a required field'
            ),
            creditCard: Yup.string().matches(/^\d{16}$/, 'Credit card must be 16 digits').required(
                'Credit card is a required field'
            ),
        }),
        onSubmit: () => {
            navigate('/success');
            dispatch(clearCart());
        },
    });

    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
        return (
            <Auth/>
        )
    }
    return (
        <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <CheckoutForm onSubmit={formik.handleSubmit}>
                <InputContainer>
                    <CheckoutLabel htmlFor="firstName">First Name:</CheckoutLabel>
                    <InputField
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <ErrorMessageStyled field="firstName" formik={formik}/>
                </InputContainer>

                <InputContainer>
                    <CheckoutLabel htmlFor="lastName">Last Name:</CheckoutLabel>
                    <InputField
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <ErrorMessageStyled field="lastName" formik={formik}/>
                </InputContainer>

                <InputContainer>
                    <CheckoutLabel htmlFor="email">Email:</CheckoutLabel>
                    <InputField
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <ErrorMessageStyled field="email" formik={formik}/>
                </InputContainer>

                <InputContainer>
                    <CheckoutLabel htmlFor="phone">Phone:</CheckoutLabel>
                    <InputField
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    <ErrorMessageStyled field="phone" formik={formik}/>
                </InputContainer>

                <InputContainer>
                    <CheckoutLabel htmlFor="creditCard">Credit Card:</CheckoutLabel>
                    <InputField
                        type="text"
                        id="creditCard"
                        name="creditCard"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.creditCard}
                    />
                    <ErrorMessageStyled field="creditCard" formik={formik}/>
                </InputContainer>

                <CheckoutButtons>
                    <BackToCartLink to="/cartPage">Back to Cart</BackToCartLink>
                    <ContinueButton type="submit">Continue</ContinueButton>
                </CheckoutButtons>
            </CheckoutForm>
        </CheckoutContainer>
    );
};

export default Checkout;