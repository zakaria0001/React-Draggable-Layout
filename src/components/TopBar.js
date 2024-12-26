// TopBar.js
import React from "react";


const TopBar = ({ showText, toggleStatus }) => {
    return (
        <section>
            <button onClick={toggleStatus}>{showText ? "Hide" : "Show"}</button>
            <span>{showText ? "Hello I'm here" : "*** **** ***"}</span>
        </section>
    );
};

export default TopBar;
