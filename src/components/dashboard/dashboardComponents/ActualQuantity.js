import React from "react";

/// import locally
import { increasementQuantity } from "../../../actionCreators";
import { decreasementQuantity } from "../../../actionCreators";

const ActualQuantity = ({ articleActualQuantity, dispatch }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articleActualQuantity.body.map((body) => {
                    return (
                        <React.Fragment key={body.dataId}>
                            <div
                                className="body-name"
                                style={{
                                    minHeight: 50,
                                    textAlign: "center",
                                }}
                            >
                                <div>
                                    <button
                                        className="actual-button decrease-button"
                                        onClick={() => {
                                            dispatch(
                                                decreasementQuantity(
                                                    articleActualQuantity.articleId,
                                                    body.dataId
                                                )
                                            );
                                        }}
                                    >
                                        <span>-</span>
                                    </button>
                                    <input
                                        type="number"
                                        name="actual-number"
                                        className="actual-number"
                                        value={body.actualQuantity}
                                        onChange={() => {}}
                                        style={{
                                            textAlign: "center",
                                        }}
                                    />
                                    <button
                                        className="actual-button increase-button"
                                        onClick={() => {
                                            dispatch(
                                                increasementQuantity(
                                                    articleActualQuantity.articleId,
                                                    body.dataId
                                                )
                                            );
                                        }}
                                    >
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};
export default ActualQuantity;
