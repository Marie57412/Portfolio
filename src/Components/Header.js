import React from "react";

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Portfolio</h1>
                <nav className="nav">
                    <a href="/"><span></span>Projet</a>
                    <a href="/contact"><span></span>Contact</a>
                    <a href="/a-propos"><span></span>A propos</a>
                </nav>
        </header>
    );
}

export default Header;