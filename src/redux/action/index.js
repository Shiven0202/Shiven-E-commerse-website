// For Add Item To Cart
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product,
    };
};

// For Delete Item From Cart
export const delcart = (product) => {
    return {
        type: "DELITEM",
        payload: product,  // Use the correct syntax for returning an object
    };
};
