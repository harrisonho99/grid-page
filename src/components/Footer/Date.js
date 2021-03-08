import React from "react";

//import locally
import { setDate } from "../../actionCreators";
const Date = ({ setDateTime, validateUser }) => {
    return (
        <React.Fragment>
            <div className="date-wrapper">
                <form className="date-form">
                    <label htmlFor="date" className="date-label">
                        Date: *
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={(event) => {
                            if (!validateUser) {
                                return;
                            }
                            setDateTime(setDate(event.target.value));
                        }}
                    />
                </form>
                <div className="footer-changing">
                    <p>Your change will affect:</p>
                    <h3>1 Article</h3>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Date;
