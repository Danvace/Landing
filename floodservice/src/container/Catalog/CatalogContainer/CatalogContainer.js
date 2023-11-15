import React, {useState} from "react";
import {CatalogContainerStyled} from "./CatalogContainer.styled";
import CarCard from "../CarCard/CarCard";

const CatalogContainer = ({cars}) => {

    const [visible, setVisible] = useState(3);

    function showMoreItems() {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <CatalogContainerStyled className="car-container">
            {cars.map((car, index) => (
                <CarCard key={index} car={car}/>
            ))}
            {/*{cars.slice(0,visible).map((car, index) => (*/}
            {/*    <CarCard key={index} car={car}/>*/}
            {/*))}*/}
            {/*{visible < cars.length && (*/}
            {/*    <button onClick={showMoreItems}>Show More</button>*/}
            {/*)}*/}
        </CatalogContainerStyled>
    );
};

export default CatalogContainer;