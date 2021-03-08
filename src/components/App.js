import React, { useState } from "react";
import { connect } from "react-redux";

//import locally
import "../styles.css";
import SearchBar from "./SearchBar";
import DashBoard from "./dashboard";
import Footer from "./Footer";
import User from "./User";
import PopUp from "./PopUp";
import DiagLog from "./DiagLog";
function App(props) {
    const validateUser = props.state.authorReducer.isUserValid;
    const setPopUp = props.state.authorReducer.isUserValid;
    const dispatchFunc = props.dispatch;
    const listArticles = props.state.authorReducer.articles;
    const [hideDiaglog, setHideDiaglog] = useState(false);
    let renderPopUp = setPopUp ? null : (
        <PopUp>
            <div
                className="popup-box"
                tabIndex="0"
                style={{ display: `${hideDiaglog ? "none" : "block"}` }}
            >
                <DiagLog
                    handleDispathch={dispatchFunc}
                    handleHideDiaglog={setHideDiaglog}
                />
            </div>
            )
        </PopUp>
    );

    return (
        <div className="App">
            <header className="header">
                <User
                    userInfo={props.state.authorReducer}
                    signOut={dispatchFunc}
                    handleHideDiaglog={setHideDiaglog}
                />
                <h1>Counting Articles</h1>
            </header>
            <SearchBar validateUser={validateUser} />
            <DashBoard
                searchInfo={props.state.searchReducer}
                articles={listArticles}
                dispatch={dispatchFunc}
            />
            <Footer setDateTime={dispatchFunc} validateUser={validateUser} />
            {renderPopUp}
        </div>
    );
}
const mapStateToProps = (state) => ({
    state: state,
});
export default connect(mapStateToProps)(App);
