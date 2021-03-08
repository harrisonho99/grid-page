import React from "react";
const Difference = ({ articleDifference }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articleDifference.body.map((body) => {
                    return (
                        <React.Fragment key={body.dataId}>
                            <div
                                className="body-name"
                                style={{
                                    minHeight: 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        height: 30,
                                        fontSize: 20,
                                    }}
                                >
                                    {body.actualQuantity - body.quantity}
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
export default Difference;
