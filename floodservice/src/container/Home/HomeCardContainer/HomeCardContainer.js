import React, {useState} from "react";
import {CardBasicStyle} from "../Home.styled";
import DelorianDM12 from "../../../icons/img_1.png";
import {Button} from "antd";
import DelorianAlfa5 from "../../../icons/img.png";
import DeloreanDMC from "../../../icons/img_2.png";
import {CardContainer} from "../CardContainer/CardContainer.styled"
import ShowButton from "../../../component/ShowButton/ShowButton";
import {Link} from "react-router-dom";
import {getCars} from "../CardContainer/CardContainer";

const CAR = "/car/"

const cars = getCars()
export const HomeCarsContainer = (props) => {
    const [visible, setVisible] = useState(props.amount);

    function showMoreItems() {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <CardContainer>
            <ul>
                <div className={"card"}>
                    {cars.slice(0, visible).map((item, index) => (
                        <li key={index}>
                            <CardBasicStyle>
                                <img src={item.image} alt="car"/>
                                <h2>{item.title}</h2>
                                <span className={"description"}>{item.span}</span>
                                <div className={"price-and-button"}>
                                    <span className={"price"}>{item.price}</span>
                                    <Link to={CAR + `${item.carId}`}>
                                        <ShowButton/>
                                    </Link>
                                </div>
                            </CardBasicStyle>
                        </li>
                    ))}
                </div>
                <div>
                    {visible < cars.length && (
                        <Button onClick={showMoreItems}>Show More</Button>
                    )}
                    {visible === cars.length && (
                        <Button onClick={() => setVisible(3)}>Show Less</Button>
                    )}
                </div>
            </ul>
        </CardContainer>
    )
        ;
};