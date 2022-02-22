import React from "react";
import "./Header.css";
import spaceShip from "../images/spaceShip.png";
import doubleHelix from "../images/doubleHelix.png";

function Header() {
    return (
        <>
            <h1>
                <img className="header-left-image" src={spaceShip} alt='spaceship' />
                    This is my header
                <img className="header-right-image" src={doubleHelix} alt='helix' />
            </h1>
        </>
    )
};

export default Header;