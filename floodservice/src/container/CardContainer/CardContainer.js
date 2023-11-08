import React from "react";
import {CardBasicStyle} from "../Home/Home.styled";
import DelorianDM12 from "../../icons/img_1.png";
import {Button} from "antd";
import DelorianAlfa5 from "../../icons/img.png";
import DeloreanDMC from "../../icons/img_2.png";
import {CardContainer} from "./CardContainer.styled";


let info = [
    {
        title: "DeLorean DMC-12",
        span:
            "The DeLorean DMC-12 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
        price: "250,000$",
        button: "Show more",
    },
    {
        title: "DeLorean Alpha5",
        span:
            "The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
        price: "40000$",
        button: "Show more",
    },
    {
        title: "Delorian Old",
        span:
            "The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
        price: "20000$",
        button: "Show more",
    },
];

export const CarsContainer = () => (
    <CardContainer>
        <ul>
            {info.map((item, index) => (
                <li key={index}>
                    <CardBasicStyle>
                        {item.title === "DeLorean DMC-12" && (
                            <img src={DelorianDM12} alt="DeLorean DMC-12" />
                        )}
                        {item.title === "DeLorean Alpha5" && (
                            <img src={DelorianAlfa5} alt="DeLorean Alpha5" />
                        )}
                        {item.title === "Delorian Old" && (
                            <img src={DeloreanDMC} alt="Delorean Old" />
                        )}

                        <h2>{item.title}</h2>
                        <span className={"description"}>{item.span}</span>
                        <div className={"price-and-button"}>
                            <span className={"price"}>{item.price}</span>
                            <Button>{item.button}</Button>
                        </div>
                    </CardBasicStyle>
                </li>
            ))}
        </ul>
    </CardContainer>
);