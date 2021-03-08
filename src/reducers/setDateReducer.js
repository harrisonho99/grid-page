const setDateReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_DATE_TIME":
            return { ...state, date: action.date };
        default:
            return state;
    }
};
export default setDateReducer;
