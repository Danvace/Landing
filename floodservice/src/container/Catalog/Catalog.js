import React, {useState} from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import CatalogContainer from "./CatalogContainer/CatalogContainer";
import {getCars} from "../Home/CardContainer/CardContainer";


export const Catalog = () => {
    const [filteredData , setFilteredData] = useState(getCars());
    function filteredCars(filteredData) {
        console.log(filteredData);
        setFilteredData(filteredData);
    }
    return (
        <div>
            <FilterSection propsUp={filteredCars}/>
            <CatalogContainer cars={filteredData}/>
        </div>
    )
}

export default Catalog