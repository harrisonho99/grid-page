//import externally
import React from "react";

//import locally
import Main from "./dashboardComponents/Main";
import ArticlesNumber from "./dashboardComponents/ArticlesNumber";
import Quantity from "./dashboardComponents/Quantity";
import QuantityAsk from "./dashboardComponents/QuantityAsk";
import ActualQuantity from "./dashboardComponents/ActualQuantity";
import Difference from "./dashboardComponents/Difference";
import Silding from "./dashboardComponents/Silding";
import LastPurchase from "./dashboardComponents/LastPurchase";
import "./styles.css";

const DashBoard = ({ searchInfo, articles, dispatch }) => {
    let rederData;
    if (searchInfo.isFilter) {
        rederData = (
            <div className="dashboard-wrapper">
                <div className="dashboard-container">
                    <div className="main">
                        <h3 className="row row-name">
                            <span>Name</span>
                        </h3>
                        {articles.map((article) => {
                            return (
                                <Main
                                    mainArticle={article}
                                    key={article.articleId}
                                />
                            );
                        })}
                    </div>
                    <div className="side">
                        <div className="content side-height">
                            <div className="row">
                                <span>Article number</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <ArticlesNumber
                                        articlesNumber={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Quantity</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <Quantity
                                        articleQuantity={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span> Is the Quantity correct ?</span>
                            </div>

                            {articles.map((article) => {
                                return (
                                    <QuantityAsk
                                        articleQuantityAsk={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Actual quantity</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <ActualQuantity
                                        articleActualQuantity={article}
                                        key={article.articleId}
                                        dispatch={dispatch}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Difference</span>
                            </div>

                            {articles.map((article) => {
                                return (
                                    <Difference
                                        articleDifference={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Silding average price</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <Silding
                                        articleSilding={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Last Purchase price</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <LastPurchase
                                        articleLastPurchase={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    } else {
        rederData = (
            <div className="dashboard-wrapper">
                <div className="dashboard-container">
                    <div className="main">
                        <h3 className="row row-name">
                            <span>Name</span>
                        </h3>
                        {articles.map((article) => {
                            return (
                                <Main
                                    mainArticle={article}
                                    key={article.articleId}
                                />
                            );
                        })}
                    </div>
                    <div className="side">
                        <div className="content side-height">
                            <div className="row">
                                <span>Article number</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <ArticlesNumber
                                        articlesNumber={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Quantity</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <Quantity
                                        articleQuantity={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span> Is the Quantity correct ?</span>
                            </div>

                            {articles.map((article) => {
                                return (
                                    <QuantityAsk
                                        articleQuantityAsk={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Actual quantity</span>
                            </div>
                            {articles.map((article) => {
                                return (
                                    <ActualQuantity
                                        articleActualQuantity={article}
                                        key={article.articleId}
                                        dispatch={dispatch}
                                    />
                                );
                            })}
                        </div>
                        <div className="content">
                            <div className="row">
                                <span>Difference</span>
                            </div>

                            {articles.map((article) => {
                                return (
                                    <Difference
                                        articleDifference={article}
                                        key={article.articleId}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }

    return rederData;
};
export default DashBoard;
