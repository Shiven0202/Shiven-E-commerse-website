const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;  // Corrected the typo here
    switch (action.type) {
        case "ADDITEM":
            // Check if Product Already Exists
            const exist = state.find((x) => x.id === product.id);  // Corrected the typo from frind to find
            if (exist) {
                // If the product exists, increase its quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // If the product does not exist, add it to the cart
                return [...state, { ...product, qty: 1 }];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);  // Corrected the typo from frind to find
            if (exist1.qty === 1) {
                // If quantity is 1, remove the product from the cart
                return state.filter((x) => x.id !== exist1.id);
            } else {
                // Otherwise, decrease the quantity of the product
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default handleCart;
