import React, {useState} from 'react';
import {ButtonContainer, LoaderLimiter, SelectWrapper} from "./ChoiceButton.styled";
import {Button} from "antd";
import {getCars, getCarsWithFilters} from "../../api";
import StyledLoader from "../Loader/Loader.styled";

function ThreeChoiceButton(props) {
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [cars, setCars] = useState(getCars());
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setSelectedOptions({});
        setOpenFilter(null);
        setCars(getCars);
        props.propsUp(getCars());
    };

    const toggleFilter = (filterTitle) => {
        setOpenFilter(openFilter === filterTitle ? null : filterTitle);
    };

    const applyFilters = async () => {
        try {
            setLoading(true);
            const filteredCars = await getCarsWithFilters(selectedOptions);

            if (Array.isArray(filteredCars)) {
                setCars(filteredCars);
                props.propsUp(filteredCars);
            } else if (filteredCars && typeof filteredCars.filter === 'function') {
                setCars([...filteredCars]);
                props.propsUp([...filteredCars]);
            } else {
                console.error('Invalid data returned by getCarsWithFilters');
            }
        } catch (error) {
            console.error('Error applying filters:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOptionChange = (filterTitle, option) => {
        setSelectedOptions(prevOptions => {
            const updatedOptions = {
                ...prevOptions,
                [filterTitle]: option
            };
            console.log(updatedOptions);
            return updatedOptions;
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
            <LoaderLimiter>
                {loading && <StyledLoader/>}
            </LoaderLimiter>
        </ButtonContainer>
    );
}

export default ThreeChoiceButton;
