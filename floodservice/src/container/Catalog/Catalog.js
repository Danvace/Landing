import React from "react";
import {FilterSection} from "./FilterSection/FilterSection";
import CatalogContainer from "./CatalogContainer/CatalogContainer";
import Delorian from "../../icons/img.png"

const cars = [
    {
        name: "Car A",
        engineVolume: 2,
        year: 2020,
        price: 25000,
        image: Delorian
    },
    {
        name: "Car B",
        engineVolume: 1.5,
        year: 2022,
        price: 28000,
        image: Delorian
    },
    {
        name: "Car C",
        engineVolume: 3.5,
        year: 2021,
        price: 32000,
        image: Delorian
    },
    {
        name: "Car D",
        engineVolume: 1.8,
        year: 2000,
        price: 20000,
        image: Delorian
    }
];

export const  Catalog = () => (
    <div>
        <FilterSection/>
        <CatalogContainer cars={cars}/>
    </div>
)

export default Catalog