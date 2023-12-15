import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart, updateQuantity} from './cartActions';
import {Link} from 'react-router-dom';
import {BackToCatalog, StyledCartPage} from "./CartPage.styled";
import Auth from "../../component/Auth/Auth";

export default function CartPage() {
    const cart = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (carId) => {
        dispatch(removeFromCart(carId));
    };

    const handleUpdateQuantity = (carId, quantity) => {
        const newQuantity = Math.max(quantity, 1);
        dispatch(updateQuantity(carId, newQuantity));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
        return (
            <Auth/>
        )
    }

    return (
        <StyledCartPage>
            <h2>Your Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item-details">
                        <img src={item.image} alt={item.name}/>
                        <Link to={`/car/${item.id}`} style={{color: 'black', padding: '0 20px'}}>{item.title}</Link>
                        <p>Price: ${item.price}</p>
                        <p>
                                                        <span className="quantity-buttons">
                                                                <button
                                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                                            {item.quantity}
                                                            <button
                                                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                                        </span>
                        </p>
                        <button className='remove-button' onClick={() => handleRemoveFromCart(item.id)}>Remove from
                            Cart
                        </button>
                    </div>
                </div>
            ))}
            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.length > 0 && (
                <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
            )}
            <BackToCatalog>
                <Link className="back-to-cart" to="/catalog">
                    Back to Catalog
                </Link>
            </BackToCatalog>
            {totalPrice > 0 && (
                <BackToCatalog>
                    <Link className="continue-btn" to='/checkout'>
                        Continue
                    </Link>
                </BackToCatalog>
            )}
        </StyledCartPage>
    );
};