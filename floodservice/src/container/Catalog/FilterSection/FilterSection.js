import React from "react";
import {FilterSectionStyled} from "./FilterSection.styled";
import ChoiceButton from "../../../component/ChoiceButton/ChoiceButton";
import {Button} from "antd";

const filters = [
    {
        title: "Price",
        options: ["Price","over 24000", "less than 23000"]
    },
    {
        title: "Year",
        options: ["Year","newer than 2005", "newer than 2020"]
    },
    {
        title: "Engine volume",
        options: ["Engine volume","over 2l", "over 3l"]
    }
];
export const FilterSection = () => (
    <FilterSectionStyled>
        <div className={"center"}>
            <span className={"sort-by"}>Sort by:</span>
            <ChoiceButton filters = {filters}/>
        </div>
        <div className={"buttons"}>
            <Button>
                Cancel
            </Button>
            <Button>
                Apply
            </Button>
        </div>
    </FilterSectionStyled>
)