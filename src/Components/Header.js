import React from "react";
import Button from "react-bootstrap/Button"

function Header(props) {
    return (
        <>
            <h1>{props.saying}</h1>
            <Button>Button</Button>
        </>
    )
};

export default Header;