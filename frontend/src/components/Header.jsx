import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in by checking the presence of the access token
        const token = localStorage.getItem("access");
        setIsLoggedIn(!!token);
    }, []);

    const handleNotesClick = () => {
        window.location.href = "/home";
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        window.location.href = "/logout";
    };

    return (
        <header className="header">
            <div className="header-left">
                <i className="fas fa-file-alt header-icon"></i>
                <h1 className="header-title">Secure Notes</h1>
                <button className="header-button" onClick={handleNotesClick}>
                    Notes
                </button>
            </div>
            <div className="header-right">
                {isLoggedIn && (
                    <button className="header-button logout-button" onClick={handleLogoutClick}>
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;