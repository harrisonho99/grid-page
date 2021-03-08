// import externally
import React, { useState } from "react";
import { connect } from "react-redux";

//import locally
import { searchAction } from "../../actionCreators";
import { filterAction } from "../../actionCreators";

const SearchBar = ({ value, dispatch, validateUser }) => {
    const [term, setTerm] = useState("");
    return (
        <div className="search-container">
            <div className="storage">
                <button disabled className="button-outlined">
                    Storage
                </button>
                <button disabled className="button-outlined">
                    Storage Place
                </button>
            </div>
            <div className="form">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(searchAction(term));
                        setTerm("");
                    }}
                    className="ui icon input"
                >
                    <input
                        type="text"
                        placeholder="Search article name of number "
                        id="search"
                        autoComplete="off"
                        className=""
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                    <i className="search icon" style={{ right: 10 }}></i>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <label htmlFor="checkbox-prices" className="toggle-label">
                        Show prices:
                    </label>
                    <input
                        type="checkbox"
                        name="toggle"
                        id="checkbox-prices"
                        checked={value.isFilter}
                        onChange={(event) => {
                            if (!validateUser) {
                                return;
                            }
                            dispatch(filterAction(event.target.checked));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
const mapStatetoProps = (state) => {
    return {
        value: state.searchReducer,
    };
};

export default connect(mapStatetoProps)(SearchBar);
