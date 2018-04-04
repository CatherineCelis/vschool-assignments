import React from "react";
import fuzzball from '../../images/cat-pic.jpeg';

function Header(){
    return (
        <header>
            <h1>welcome to my page</h1>
            <img src={fuzzball} alt=""/>
        </header>
    )
}

export default Header;