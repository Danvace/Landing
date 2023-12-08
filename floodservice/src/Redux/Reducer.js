const loadCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const saveCartToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = loadCartFromStorage();

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                const updatedState = [...state];
                updatedState[existingItemIndex].quantity += action.payload.quantity;
                saveCartToStorage(updatedState);
                return updatedState;
            } else {
                const newState = [...state, { ...action.payload, quantity: action.payload.quantity }];
                saveCartToStorage(newState);
                return newState;
            }

        case 'REMOVE_FROM_CART':
            const updatedState = state.filter((item) => item.id !== action.payload);
            saveCartToStorage(updatedState);
            return updatedState;

        case 'UPDATE_QUANTITY':
            const updatedCart = state.map((item) =>
                item.id === action.payload.carId ? { ...item, quantity: action.payload.quantity } : item
            );
            saveCartToStorage(updatedCart);
            return updatedCart;

        case 'CLEAR_CART':
            saveCartToStorage([]);
            return [];

        default:
            return state;
    }
};

export default cartReducer;