import React from "react";

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Portfolio</h1>
                <nav className="nav">
                    <a href="/">Projet</a>
                    <a href="/contact">Contact</a>
                    <a href="/a-propos">A propos</a>
                </nav>
        </header>
    );
}

export default Header;