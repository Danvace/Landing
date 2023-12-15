import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {SelectedCarStyled, StyledCart} from "./SelectedCar.styled";
import {getCarById} from "../../api";
import StyledLoader from "../Loader/Loader.styled";
import {addToCart} from "../../container/CartPage/cartActions";
import {useDispatch, useSelector} from "react-redux";

export const SelectedCar = () => {
    const [car, setCars] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const carId = location.pathname.split("/")[2];

    useEffect(() => {
        getCarById(carId)
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
                setLoading(false);
            });
    }, []);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState(null);
    const handleAddToCart = (quantity) => {
        dispatch(addToCart(car, quantity));
        setMessage(`${car.title} added to cart!`)
        setTimeout(() => setMessage(null), 3000);
    };


    return (
        <SelectedCarStyled>
            <Link to={"/catalog"}>
                <button>Go back</button>
            </Link>
            {loading ? (
                <StyledLoader/>
            ) : car ? (
                <React.Fragment>
                    <h1>{car.title}</h1>
                    <img src={car.image} alt={car.title}/>
                    <span>{car.span}</span>
                    <p>Price: {car.price}</p>
                    <p>Engine Volume: {car.volume}</p>
                    <p>Year: {car.year}</p>
                    <StyledCart className={"add-to-cart"}>
                        <p>Quantity in Cart: {cart.find((item) => item.id === car.id)?.quantity || 0}</p>
                        <div>
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                defaultValue="1"
                                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                            />
                        </div>
                        <button onClick={() => handleAddToCart(quantity)}>Add to Cart</button>
                    </StyledCart>
                </React.Fragment>
            ) : (
                <p>Car not found</p>
            )}
        </SelectedCarStyled>
    );
};

export default SelectedCar;
