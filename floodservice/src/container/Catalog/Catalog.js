import React, {useEffect, useState} from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import CatalogContainer from "./CatalogContainer/CatalogContainer";
import {getCars} from "../../api";
import StyledLoader from "../../component/Loader/Loader.styled";
import {StyledCatalog} from "./Catalog.styled";
import Auth from "../../component/Auth/Auth";


export const Catalog = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCars()
            .then(data => setFilteredData(data))
            .catch(error => console.error('Error fetching cars:', error))
            .finally(() => setLoading(false));

    }, []);

    function handleFilteredCars(filteredData) {
        setFilteredData(filteredData);
    }

    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
        return (
            <Auth/>
        )
    }

    return (
        <StyledCatalog>
            {loading ? (
                <StyledLoader>Loading...</StyledLoader>
            ) : (
                <>
                    <FilterSection propsUp={handleFilteredCars}/>
                    <CatalogContainer cars={filteredData}/>
                </>
            )}
        </StyledCatalog>
    );
}

export default Catalog;