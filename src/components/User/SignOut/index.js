import React from "react";
//import locally
import "./styles.css";
import { setUserSignOut } from "../../../actionCreators";
const iconStyle = { fontSize: 25, position: "absolute", top: 10, right: 10 };
const SignOut = ({ signOut }) => {
    return (
        <>
            <div className="sign-out-box">
                <i className="caret up icon" id="arrow"></i>
                <div className="sign-out">
                    <button className="sign-out-button">
                        <span>
                            <span>Activity logs</span>
                            <i
                                className="list alternate outline icon"
                                style={iconStyle}
                            ></i>
                        </span>
                    </button>
                    <button
                        className="sign-out-button"
                        onClick={() => {
                            signOut(setUserSignOut());
                        }}
                    >
                        <span>
                            <span>Sign Out</span>
                            <i
                                className="sign-out alternate icon"
                                style={iconStyle}
                            ></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};
export default SignOut;
