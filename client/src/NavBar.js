import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineHome } from 'react-icons/hi';
import { RiArticleLine } from 'react-icons/ri';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const styleNavBar = {
    textAlign: "center",
    backgroundColor: "#30505F",
    position: "fixed",
    top: "0",
    width: "100%",
    borderBottom: "4px solid #FFFFFF"
}


const NavBar = () => {
    return(
        <nav style={styleNavBar}>
            <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                <div>
                    <li>
                        <Link to="/"><HiOutlineHome /> Home</Link>
                    </li>
                    <li>
                        <Link to="/Articles-List"><RiArticleLine /> Articles</Link>
                    </li>
                    <li>
                        <Link to="/About-Us"><AiOutlineQuestionCircle /> About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact"><HiOutlineMail /> Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
export default NavBar;