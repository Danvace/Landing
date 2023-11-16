import React, { useState } from 'react';
import { ButtonContainer } from "./ChoiceButton.styled";
import { Button } from "antd";

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

    const handleCancel = () => {
        setSelectedOptions({});
    };

    return (
        <ButtonContainer>
            {props.filters.map((filter, index) => (
                <div key={index}>
                    <select
                        placeholder={filter.title}
                        value={selectedOptions[filter.title] || ''}
                        onChange={(e) => handleOptionChange(filter.title, e.target.value)}>
                        {filter.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <div className={"buttons"}>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
                <Button>
                    Apply
                </Button>
            </div>
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;
