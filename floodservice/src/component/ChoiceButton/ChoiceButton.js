import React, { useState } from 'react';
import { ButtonContainer } from "./ChoiceButton.styled";

function ThreeChoiceButton(props) {
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});

    const toggleFilter = (filterTitle) => {
        setOpenFilter(openFilter === filterTitle ? null : filterTitle);
    };

    const handleOptionChange = (filterTitle, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [filterTitle]: option
        });
        setOpenFilter(null);
    };

    return (
        <ButtonContainer>
            {props.filters.map((filter, index) => (
                <div key={index}>
                    <select placeholder={filter.title} value={selectedOptions[filter.title]} onChange={(e) => handleOptionChange(filter.title, e.target.value)}>
                        {filter.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;
