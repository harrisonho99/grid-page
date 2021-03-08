const searchReducer = (state = { value: "", isFilter: false }, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, value: action.term };
        case "FILTER":
            return { ...state, isFilter: action.filter };
        default:
            return state;
    }
};

export default searchReducer;
