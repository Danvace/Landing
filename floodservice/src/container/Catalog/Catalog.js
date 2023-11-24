import React, {useEffect, useState} from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import CatalogContainer from "./CatalogContainer/CatalogContainer";
import {getCars} from "../../api";
import StyledLoader from "../../component/Loader/Loader.styled";


export const Catalog = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data when the component mounts
        getCars()
            .then(data => setFilteredData(data))
            .catch(error => console.error('Error fetching cars:', error))
            .finally(() => setLoading(false));

    }, []);

    function handleFilteredCars(filteredData) {
        setFilteredData(filteredData);
    }

    return (
        <div>
            {loading ? (
                // Display a loading indicator while data is being fetched
                <StyledLoader>Loading...</StyledLoader>
            ) : (
                // Once data is loaded, render FilterSection and CatalogContainer
                <>
                    <FilterSection propsUp={handleFilteredCars} />
                    <CatalogContainer cars={filteredData} />
                </>
            )}
        </div>
    );
}

export default Catalog;