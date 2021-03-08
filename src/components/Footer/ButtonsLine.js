import React from "react";
const ButtonLines = () => {
    return (
        <div className="button-wrapper">
            <div>
                <button className="button-line-footer">Cancel</button>
                <button className="button-line-footer">Print list</button>
                <button className="button-line-footer" disabled={true}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default ButtonLines;
