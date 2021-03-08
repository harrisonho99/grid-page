import { nanoid, random } from "nanoid";

// data

const articles = [
    {
        articleId: nanoid(10),
        tittle: "VIN | HALONG",
        body: [
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
        ],
    },
    {
        articleId: nanoid(10),
        tittle: "BigC | QuanTB",
        body: [
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
        ],
    },
    {
        articleId: nanoid(10),
        tittle: "VIN | HALONG",
        body: [
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
        ],
    },
    {
        articleId: nanoid(10),
        tittle: "BigC | QuanTB",
        body: [
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
        ],
    },
    {
        articleId: nanoid(10),
        tittle: "VIN | HALONG",
        body: [
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
            {
                actualQuantity: random(1)[0],
                dataId: nanoid(5),
                name: "Test No number No Variant",
                articlesNumber: "p3453421",
                quantity: random(1)[0],
                sildingAverage: "29772.60 CHF",
                lastPurchase: "29772.60 CHF",
            },
        ],
    },
];

const authorReducer = (
    state = {
        isUserValid: false,
        userName: "",
        articles: [],
    },
    action
) => {
    switch (action.type) {
        case "SET_USER_LOGIN":
            return {
                ...state,
                userName: action.userName.toUpperCase(),
                isUserValid: true,
                articles,
            };

        case "CHANGE_ACTUAL_QUANTITY_VALUE":
            let defaultState = {
                ...state,
                articles: setAritcles(articles, action),
            };
            return defaultState;
        case "USER_SIGN_OUT":
            return { ...state, isUserValid: false, userName: "", articles: [] };
        default:
            return state;
    }
};
export default authorReducer;

function setAritcles(articles, action) {
    if (action.increase === "INCREASE") {
        return articles.map((article) => {
            if (article.articleId === action.articleId) {
                return {
                    ...article,
                    body: article.body.map((content) => {
                        if (content.dataId === action.dataId) {
                            let changedContent = {
                                ...content,
                                actualQuantity: ++content.actualQuantity,
                            };
                            return changedContent;
                        }
                        return content;
                    }),
                };
            }
            return article;
        });
    }
    if (action.decrease === "DECREASE") {
        return articles.map((article) => {
            if (article.articleId === action.articleId) {
                return {
                    ...article,
                    body: article.body.map((content) => {
                        if (content.dataId === action.dataId) {
                            let changedContent = {
                                ...content,
                                actualQuantity: --content.actualQuantity,
                            };
                            return changedContent;
                        }
                        return content;
                    }),
                };
            }
            return article;
        });
    }
    return articles;
}
