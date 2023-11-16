import React, {useState} from "react";
import {CatalogContainerStyled} from "./CatalogContainer.styled";
import CarCard from "../CarCard/CarCard";
import {CarsContainer} from "../../Home/CardContainer/CardContainer";

const CatalogContainer = (props) => {

    return (
        <CatalogContainerStyled className="car-container">
            <CarsContainer amount ={6}/>
        </CatalogContainerStyled>
    );
};

export default CatalogContainer;