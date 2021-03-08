import React from "react";
const Main = ({ mainArticle }) => {
    return (
        <>
            <div className="title top-title">
                <h3>{mainArticle.tittle}</h3>
            </div>
            <div className="article-content">
                {mainArticle.body.map((body) => {
                    return (
                        <div key={body.dataId}>
                            <div
                                className="body-name"
                                style={{ minHeight: 50 }}
                            >
                                {body.name}
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Main;
