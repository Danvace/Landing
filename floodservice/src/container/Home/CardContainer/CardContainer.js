import React, {useEffect, useState} from "react";
import {CardBasicStyle} from "../Home.styled";
import DelorianDM12 from "../../../icons/img_1.png";
import {Button} from "antd";
import DelorianAlfa5 from "../../../icons/img.png";
import DeloreanDMC from "../../../icons/img_2.png";
import {CardContainer, NoItemsMessage} from "./CardContainer.styled";
import ShowButton from "../../../component/ShowButton/ShowButton";
import {Link} from "react-router-dom";
import axios from "axios";
// import axios from 'axios';

const CAR = "/car/"

// let cars = [
//     {
//         carId: 1,
//         image: DelorianDM12,
//         title: "DeLorean DMC-12",
//         span:
//             "The DeLorean DMC-12 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 250000,
//         volume: 2.85,
//         year: 2022,
//     },
//     {
//         carId: 2,
//         image: DelorianAlfa5,
//         title: "DeLorean Alpha5",
//         span:
//             "The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 40000,
//         volume: 2.95,
//         year: 2023,
//     },
//     {
//         carId: 3,
//         image: DeloreanDMC,
//         title: "Delorian Old",
//         span:
//             "The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 20000,
//         volume: 3,
//         year: 1985,
//     },
//     {
//         carId: 4,
//         image: DelorianDM12,
//         title: "DeLorean DMC-12",
//         span:
//             "The DeLorean DMC-12 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 250000,
//         volume: 2.85,
//         year: 2019,
//     },
//     {
//         carId: 5,
//         image: DelorianAlfa5,
//         title: "DeLorean Alpha5",
//         span:
//             "The Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 40000,
//         volume: 4,
//         year: 2023,
//     },
//     {
//         carId: 6,
//         image: DeloreanDMC,
//         title: "Delorian Old",
//         span:
//             "The lol Delorean Alfa 5 is an iconic sports car with a unique stainless steel body, gull-wing doors, and pop culture status. It's a classic loved by collectors and fans.",
//         price: 21000,
//         volume: 3,
//         year: 1985,
//     },
// ];

// export function getCars() {
//     // Return the promise returned by axios.get
//     return axios.get("http://localhost:8080/api/cars")
//         .then(function (response) {
//             // Log the data for debugging
//             // console.log(response.data);
//
//             // Return the data to the next `then` in the chain
//             return response.data;
//         })
//         .catch(function (error) {
//             // Handle errors
//             console.log(error);
//             // Re-throw the error to propagate it to the next `catch` in the chain
//             throw error;
//         });
// }

export const CarsContainer = (props) => {
    const [visible, setVisible] = useState(props.amount);
    const [cars, setCars] = useState(props.cars);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setCars(props.cars);
    }, [props.cars]);

    function handleSearchInputChange(event) {
        setSearchValue(event.target.value);
    }

    // Filter cars based on searchValue
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
                                    <img src={item.image} alt="car" />
                                    <h2>{item.title}</h2>
                                    <span className={"description"}>{item.span}</span>
                                    <div className={"price-and-button"}>
                                        <span className={"price"}>{item.price}</span>
                                        <Link to={CAR + `${item.id}`}>
                                            <ShowButton />
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