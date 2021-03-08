import React from "react";
const QuantityAsk = ({ articleQuantityAsk }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articleQuantityAsk.body.map((body) => {
                    return (
                        <React.Fragment key={body.dataId}>
                            <div
                                className="body-name"
                                style={{
                                    minHeight: 50,
                                    textAlign: "center",
                                }}
                            >
                                <div className="button-question">
                                    <button className="article-button yes-button">
                                        Yes
                                    </button>
                                    <button className="article-button no-button">
                                        No
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
export default QuantityAsk;
