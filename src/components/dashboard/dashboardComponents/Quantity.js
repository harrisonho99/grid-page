import React from "react";
const Quantity = ({ articleQuantity }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articleQuantity.body.map((body) => {
                    return (
                        <React.Fragment key={body.dataId}>
                            <div
                                className="body-name"
                                style={{
                                    minHeight: 50,
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: 70,
                                        height: 36,
                                        borderRadius: 20,
                                        fontSize: 20,
                                        margin: "auto",
                                        display: "flex",
                                        background: "rgb(18,134,219)",
                                        color: "white",
                                    }}
                                >
                                    <span
                                        style={{
                                            margin: "auto",
                                        }}
                                    >
                                        {body.quantity}
                                    </span>
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
export default Quantity;
