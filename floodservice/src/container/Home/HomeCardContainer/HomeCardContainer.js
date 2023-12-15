import React, {useEffect, useState} from "react";
import {CardBasicStyle} from "../Home.styled";
import {Button} from "antd";
import {CardContainer} from "../CardContainer/CardContainer.styled"
import {getCars} from "../../../api";
import StyledLoader from "../../../component/Loader/Loader.styled";

const CAR = "/car/"

export const HomeCarsContainer = (props) => {
    const [cars, setCars] = useState([]);
    const [visible, setVisible] = useState(props.amount);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCars()
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error))
            .finally(() => setLoading(false))

    }, []);

    function showMoreItems() {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <CardContainer>
            {loading ? (
                <StyledLoader/>
            ) : (
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
                                        {/*<Link to={CAR + `${item.carId}`}>*/}
                                        {/*    <ShowButton/>*/}
                                        {/*</Link>*/}
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
            )}
        </CardContainer>
    );
};