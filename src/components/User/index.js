import React, { useState } from "react";

//import locally
import SignOut from "./SignOut";
const User = ({ userInfo, signOut, handleHideDiaglog }) => {
    const [signOutBox, setSignOutBox] = useState(false);
    const renderUser = userInfo.isUserValid ? (
        <div
            onClick={() => {
                setSignOutBox(!signOutBox);
            }}
            style={{ cursor: "pointer", height: "100%", position: "relative" }}
        >
            <i
                className="user circle icon"
                style={{
                    width: 40,
                    height: 40,
                    marginLeft: 3,
                    padding: 0,
                    fontSize: 40,
                    transform: "translateY(13px)",
                    color: "rgb(100,134,219)",
                }}
            ></i>
            <span
                style={{
                    margin: "13px 2px 0 10px",
                    fontSize: 16,
                    fontWeight: 500,
                }}
            >
                {(() => {
                    if (userInfo.userName.length >= 7) {
                        return userInfo.userName.substring(0, 7) + "...";
                    } else {
                        return userInfo.userName;
                    }
                })()}
            </span>
            {signOutBox ? <SignOut signOut={signOut} /> : null}
        </div>
    ) : (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
                cursor: "pointer",
                fontWeight: 500,
            }}
            onClick={(event) => {
                event.preventDefault();
                handleHideDiaglog(false);
            }}
        >
            <span>Sign in</span>
        </div>
    );
    return (
        <div
            style={{
                position: "absolute",
                right: 10,
                top: 5,
                width: "fit-content",
                borderRadius: 10,
                height: 50,
                border: "1px solid rgb(104,64,162)",
                minWidth: 150,
            }}
        >
            {renderUser}
        </div>
    );
};
export default User;
