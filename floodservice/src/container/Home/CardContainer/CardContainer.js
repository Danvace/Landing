import React, {useEffect, useState} from "react";
import {CardBasicStyle} from "../Home.styled";
import {Button} from "antd";
import {CardContainer, NoItemsMessage} from "./CardContainer.styled";
import ShowButton from "../../../component/ShowButton/ShowButton";
import {Link} from "react-router-dom";

const CAR = "/car/"

export const CarsContainer = (props) => {
    const [visible, setVisible] = useState(props.amount);
    const [cars, setCars] = useState(props.cars);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        if (props.cars instanceof Promise) {
            const fetchData = async () => {
                try {
                    const resolvedCars = await props.cars;

                    setCars(resolvedCars);
                } catch (error) {
                    console.error('Error fetching cars:', error);
                }
            };

            fetchData();
        } else {
            setCars(props.cars);
        }
    }, [props.cars]);


    function handleSearchInputChange(event) {
        setSearchValue(event.target.value);
    }

    const filteredCars = cars.filter((car) =>
        car.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.span.toLowerCase().includes(searchValue.toLowerCase()) ||
        car.price.toString().includes(searchValue.toLowerCase())
    );

    function showMoreItems() {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <CardContainer>
            <div>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchValue}
                    onChange={handleSearchInputChange}
                />
            </div>
            <ul>
                {filteredCars.length > 0 ? (
                    <div className={"card"}>
                        {filteredCars.slice(0, visible).map((item, index) => (
                            <li key={index}>
                                <CardBasicStyle>
                                    <img src={item.image} alt="car"/>
                                    <h2>{item.title}</h2>
                                    <span className={"description"}>{item.span}</span>
                                    <div className={"price-and-button"}>
                                        <span className={"price"}>{item.price}</span>
                                        <Link to={CAR + `${item.id}`}>
                                            <ShowButton/>
                                        </Link>
                                    </div>
                                </CardBasicStyle>
                            </li>
                        ))}
                    </div>
                ) : (
                    <NoItemsMessage>No items were found.</NoItemsMessage>
                )}
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
    );
};