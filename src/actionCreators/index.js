// search action
export const searchAction = (term) => ({ type: "SEARCH", term });
export const filterAction = (filter) => ({ type: "FILTER", filter });
export const setUserAction = (userName) => ({
    type: "SET_USER_LOGIN",
    userName,
});
export const setUserSignOut = () => ({ type: "USER_SIGN_OUT" });
export const setDate = (date) => ({ type: "SET_DATE_TIME", date });
export const increasementQuantity = (articleId, dataId) => ({
    type: "CHANGE_ACTUAL_QUANTITY_VALUE",
    increase: "INCREASE",
    articleId,
    dataId,
});
export const decreasementQuantity = (articleId, dataId) => ({
    type: "CHANGE_ACTUAL_QUANTITY_VALUE",
    decrease: "DECREASE",
    articleId,
    dataId,
});
