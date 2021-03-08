import React, { useState } from "react";

//import locally
import "./styles.css";
import { setUserAction } from "../../actionCreators";

const DiagLog = ({ handleDispathch, handleHideDiaglog }) => {
    const [userName, setUserName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName) {
            handleDispathch(setUserAction(userName));
        }
    };
    return (
        <div className="diaglog">
            <div
                className="close-icon-wrapper"
                onClick={() => {
                    handleHideDiaglog(true);
                }}
            >
                <i className="close icon" id="close-diaglog"></i>
            </div>
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <div className="input-label-sign">
                    <label htmlFor="user-sign">Enter Name:</label>
                    <br />
                    <input
                        id="user-sign"
                        type="text"
                        className="sign-in-input"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                        autoComplete="off"
                    />
                </div>
                <div className="submit-user">
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
};
export default DiagLog;
