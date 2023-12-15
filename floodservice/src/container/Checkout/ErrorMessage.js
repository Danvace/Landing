import React from 'react';

const ErrorMessage = ({field, formik}) => {
    return formik.touched[field] && formik.errors[field] ? (
        <div style={{color: 'red'}}>{formik.errors[field]}</div>
    ) : null;
};

export default ErrorMessage;