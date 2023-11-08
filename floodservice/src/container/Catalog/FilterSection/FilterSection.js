import React from "react";
import {FilterSectionStyled} from "./FilterSection.styled";
import ChoiceButton from "../../../component/ChoiceButton/ChoiceButton";
import ApplyButton from "../../../component/ApplyButton/ApplyButton";


export const FilterSection = () => (
    <FilterSectionStyled>
        <div className={"center"}>
            <span className={"sort-by"}>Sort by:</span>
            <ChoiceButton/>
        </div>
        <ApplyButton/>
    </FilterSectionStyled>
)