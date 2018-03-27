import React from "react";
import coolPic from "../../images/header-pic.jpg";

function Header() {
    return (
        <header >
            <div>
            <h1>Artic Cat Heli-Ski Tours</h1>
            <img src={coolPic} alt=""/>
            <h2>ARE YOU SEARCHING FOR YOUR NEXT ADRENALINE RUSH?</h2>
            <p>PLEASE PUT INFO HERE ABOUT HELI-SKING</p>
            {/* <navbar className="linkz>
                <a href="home.html">Requirements</a>
                <a href="about.html">Schedule</a>
                <a href="contact.html">Sign Up For Tour</a>
            </navbar> */}
            </div>
        </header>    
    )
    
}

export default Header;