import React from 'react';
import { Link } from 'react-router-dom';

const styleNavBar = {
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: "0",
    width: "100%"
}


const NavBar = () => {
    return(
        <nav style={styleNavBar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;