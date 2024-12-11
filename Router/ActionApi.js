export const fetchElectronicProduct = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
            const data = await response.json();
            dispatch({
                type: 'ADD_ELECTRONICS',
                payload: data,
            });
        } catch (error) {
            console.error("Error fetching electronics:", error);
        }
    };
};

export const fetchJewelleryProduct = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
            const data = await response.json();
            dispatch({
                type: 'ADD_JEWELLERY',
                payload: data,
            });
        } catch (error) {
            console.error("Error fetching jewellery:", error);
        }
    };
};