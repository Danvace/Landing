import React from "react";
import {CatalogContainerStyled} from "./CatalogContainer.styled";
import {CarsContainer} from "../../Home/CardContainer/CardContainer";

const CatalogContainer = (props) => {

    return (
        <CatalogContainerStyled className="car-container">
            <CarsContainer cars={props.cars} amount={6}/>
        </CatalogContainerStyled>
    );
};

export default CatalogContainer;