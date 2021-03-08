import React from "react";

//import locally
import Date from "./Date";
import "./styles.css";
import ButtonLines from "./ButtonsLine";

const Footer = ({ setDateTime, validateUser }) => {
    return (
        <>
            <hr className="top-footer" />
            <footer>
                <Date setDateTime={setDateTime} validateUser={validateUser} />
                <ButtonLines />
            </footer>
        </>
    );
};
export default Footer;
