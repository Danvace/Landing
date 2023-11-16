import React from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import CatalogContainer from "./CatalogContainer/CatalogContainer";
import {getCars} from "../Home/CardContainer/CardContainer";

const cars = getCars()

export const Catalog = () => (
    <div>
        <FilterSection/>
        <CatalogContainer cars={cars}/>
    </div>
)

export default Catalog