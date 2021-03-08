import React from "react";
const LastPurchase = ({ articleLastPurchase }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articleLastPurchase.body.map((body) => {
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
                                        fontSize: 18,
                                    }}
                                >
                                    {body.lastPurchase}
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
export default LastPurchase;
