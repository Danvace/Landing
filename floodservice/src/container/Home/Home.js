import React from "react";
import CarGood from "../../../src/icons/car1.webp"
import DelorianDM12 from "../../icons/img_1.png"
import DelorianAlfa5 from "../../icons/img.png"
import DeloreanDMC from "../../icons/img_2.png"
import {CardBasicStyle, CardContainer, MainPhotoContainer} from "./Home.styled";
import {Button} from "antd";

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
        <CardContainer>
            <ul>
                <li>
                    <CardBasicStyle>
                        <img src={DelorianDM12} alt=""/>
                        <h2>DeLorean DMC-12</h2>
                        <span className={"description"}>The DeLorean DMC-12 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.</span>
                        <div className={"price-and-button"}>
                            <span className={"price"}>250,000$</span>
                            <Button>Show more</Button>
                        </div>
                    </CardBasicStyle>
                </li>
                <li>
                    <CardBasicStyle>
                        <img src={DelorianAlfa5} alt="DeLorean Alpha5"/>
                        <h2>DeLorean Alpha5</h2>
                        <span className={"description"}>
                            The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.
                        </span>
                        <div className={"price-and-button"}>
                            <span className={"price"}>40000$</span>
                            <Button>Show more</Button>
                        </div>
                    </CardBasicStyle>
                </li>
                <li>
                    <CardBasicStyle>
                        <img src={DeloreanDMC} alt="DeloreanDMC"/>
                        <h2>Delorian Old</h2>
                        <span className={"description"}>
                            The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.
                        </span>
                        <div className={"price-and-button"}>
                            <span className={"price"}>20000$</span>
                            <Button>Show more</Button>
                        </div>
                    </CardBasicStyle>
                </li>
            </ul>
        </CardContainer>
    </div>
)

export default Home;