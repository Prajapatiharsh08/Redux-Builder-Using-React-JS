const initialState = [];

export const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.inputData];
        case "EDIT":
            return state.map((item, index) =>
                index === action.inputData.i ? action.inputData.data : item
            );
        case "DELETE":
            return state.filter((_, index) => index !== action.inputData.i);
        default:
            return state;
    }
};

export const addItem = (inputData) => ({
    type: "ADD",
    inputData,
});

export const editItem = (i, data) => ({
    type: "EDIT",
    inputData: { i, data },
});

export const deleteItem = (i) => ({
    type: "DELETE",
    inputData: { i },
});
