export const addToCart = (car, quantity = 1) => ({
    type: 'ADD_TO_CART',
    payload: {...car, quantity},
});

export const removeFromCart = (carId) => ({
    type: 'REMOVE_FROM_CART',
    payload: carId,
});

export const updateQuantity = (carId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: {carId, quantity},
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});