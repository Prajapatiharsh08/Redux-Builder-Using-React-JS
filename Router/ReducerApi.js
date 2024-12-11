const DataObject = {
    electronics: [],
    jewellery: [],
};

export const ReducerApi = (state = DataObject, action) => {
    switch (action.type) {
        case 'ADD_ELECTRONICS':
            return {
                ...state,
                electronics: action.payload
            };
        case 'ADD_JEWELLERY':
            return {
                ...state,
                jewellery: action.payload
            };
        default:
            return state;
    }
};