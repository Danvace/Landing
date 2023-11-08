import React from 'react';
import {StyledApplyButton} from "./ApplyButton.styled";

function ApplyButton({ onClick }) {
    return (
        <StyledApplyButton onClick={onClick} className="apply-button">
            Apply
        </StyledApplyButton>
    );
}

export default ApplyButton;
