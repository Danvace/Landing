import React, {useState} from "react";
import {FilterSectionStyled} from "./FilterSection.styled";
import ChoiceButton from "../../../component/ChoiceButton/ChoiceButton";
import {Button} from "antd";

const filters = [
    {
        title: "price",
        options: ["Price", "20000-50000", "over 24000", "less than 23000"]
    },
    {
        title: "year",
        options: ["Year", "newer than 2005", "newer than 2020"]
    },
    {
        title: "engineVolume",
        options: ["Engine volume", "over 2l", "over 3l"]
    }
];
export const FilterSection = (props) => {


    function handleFiltersCars(filteredData) {
        props.propsUp(filteredData);
    }

    return (
        <FilterSectionStyled>
            <div className={"center"}>
                <span className={"sort-by"}>Sort by:</span>
                <ChoiceButton filters={filters} propsUp = {handleFiltersCars}/>
            </div>
        </FilterSectionStyled>
    )
}