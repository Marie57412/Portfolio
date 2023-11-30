import React from "react";


function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Portfolio</h1>
                <nav className="nav">
                    <a href="#project"><span></span>Projet</a>
                    <a href="#about-section"><span></span>A propos</a>
                    <a href="/contact"><span></span>Contact</a>
                </nav>
        </header>
    );
}

export default Header;