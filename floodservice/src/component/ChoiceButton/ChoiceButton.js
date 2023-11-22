import React, {useState} from 'react';
import {ButtonContainer, SelectWrapper} from "./ChoiceButton.styled";
import {Button} from "antd";
import {getCars} from "../../container/Home/CardContainer/CardContainer";

function ThreeChoiceButton(props) {
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [cars, setCars] = useState(getCars());


    const handleCancel = () => {
        setSelectedOptions({});
        setOpenFilter(null);
        setCars(getCars);
        props.propsUp(getCars())
    };


    const toggleFilter = (filterTitle) => {
        setOpenFilter(openFilter === filterTitle ? null : filterTitle);
    };

    const applyFilters = () => {
        const filteredCars = getCars().filter((car) => {
            return (
                ((!selectedOptions.price ||
                        (selectedOptions.price === "over 24000" && parseFloat(car.price) > 24000) ||
                        (selectedOptions.price === "less than 23000" && parseFloat(car.price) < 23000)) ||
                    (selectedOptions.price === "20000-50000" && parseFloat(car.price) > 20000 && parseFloat(car.price) < 50000)) &&
                (!selectedOptions.year ||
                    (selectedOptions.year === "newer than 2005" && car.year > 2005) ||
                    (selectedOptions.year === "newer than 2020" && car.year > 2020)) &&
                (!selectedOptions.engineVolume ||
                    (selectedOptions.engineVolume === "over 2l" && car.volume > 2) ||
                    (selectedOptions.engineVolume === "over 3l" && car.volume > 3))
            );
        });
        setCars(filteredCars);
        props.propsUp(filteredCars);
    };



    const handleOptionChange = (filterTitle, option) => {
        setSelectedOptions(prevOptions => {
            const updatedOptions = {
                ...prevOptions,
                [filterTitle]: option
            };
            console.log(updatedOptions);  // Log the updated state
            return updatedOptions;  // Return the updated state
        });
        setOpenFilter(null);
    };

    return (
        <ButtonContainer>
            {props.filters.map((filter, index) => (
                <SelectWrapper key={index}>
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
                </SelectWrapper>
            ))}
            <div className={"buttons"}>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={applyFilters}>
                    Apply
                </Button>
            </div>
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;
