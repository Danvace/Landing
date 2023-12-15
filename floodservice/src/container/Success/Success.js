import React from 'react'
// import Start from '../signup/Start';
import Success1 from './success.jpeg'
import {ContinueButton, SuccessContainer, SuccessImage} from "./Success.styled";

export default function Success() {

    const isLoggedIn = localStorage.getItem('token');

    // if (!isLoggedIn) {
    //     return (
    //         <Start />
    //     )
    // }


    return (
        <SuccessContainer>
            <SuccessImage src={Success1} alt='success'/>
            <h1>Your order was sent to processing!</h1>
            <h2>Check your email for further instructions.</h2>
            <ContinueButton to='/catalog'>Back to Catalog</ContinueButton>
        </SuccessContainer>
    );
}
