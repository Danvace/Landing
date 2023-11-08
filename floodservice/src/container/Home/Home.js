import React from "react";
import CarGood from "../../../src/icons/car1.webp"
import {MainPhotoContainer} from "./Home.styled";
import {CarsContainer} from "../CardContainer/CardContainer";

export const Home = () => (
    <div>
        <MainPhotoContainer>
            <img src={CarGood} alt="nice car"/>
            <div className={"description"}>
                <h1>DELOREAN</h1>
                <p>This is our cutting-edge model, equipped with an incredibly powerful PowerShell scripting capability,
                    and boasting the most saturated and vibrant color palette that truly sets it apart from the
                    competition,
                    offering an unparalleled combination of advanced functionalities and a visually stunning design.
                </p>
            </div>
        </MainPhotoContainer>
        <CarsContainer/>
    </div>
)

export default Home;