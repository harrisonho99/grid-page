import React from "react";

const ArticlesNumber = ({ articlesNumber }) => {
    return (
        <>
            <div className="top-title"></div>
            <div className="article-content">
                {articlesNumber.body.map((body) => {
                    return (
                        <React.Fragment key={body.dataId}>
                            <div
                                className="body-name"
                                style={{
                                    minHeight: 50,
                                    textAlign: "center",
                                }}
                            >
                                {body.articlesNumber}
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};
export default ArticlesNumber;
