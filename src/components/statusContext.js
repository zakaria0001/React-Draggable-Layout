// StatusContext.js
import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [showText, setShowText] = useState(false);

    const toggleStatus = () => {
        setShowText((prev) => !prev);
    };

    return (
        <StatusContext.Provider value={{ showText, toggleStatus }}>
            {children}
        </StatusContext.Provider>
    );
};
