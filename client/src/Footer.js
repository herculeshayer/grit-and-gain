import React from 'react';

import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


import pyreImage from './images/pyre.svg';


const footerContainer = {
    textAlign: "center",
    backgroundColor: "#30505F",
    position: "absolute",
    right: "0",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "10rem",
    borderTop: "4px solid #FFFFFF",
    display: "flex",
    flexDirection: "row",
    color:"#C2FFE3",
    fontSize: "14px"
    // justifyCenter: "center"
}
const footerItem = {
    alignSelf: "auto",
    width: "100%",
    height: "50%",
    margin: "auto",
    display: "table-cell",
    borderRight: "solid black 1px"
}


const Footer = () => {
    return(
        <div style={footerContainer}>
            <div style={footerItem}>
                <img src={pyreImage} width="75px" alt="pyre svg - website icon" />
            </div>
            <div style={footerItem}>
                <p >Website Designed<br/> & Created By: <br/><a className="footerLinks" href="https://www.github.com/herculeshayer"><b>Harman</b></a></p>
            </div>
            <div style={footerItem}>
                <p>Follow Us On Social Media:</p>
                <nav style={{fontSize: "2rem", marginTop: "15px"}}>
                    <a style={{marginRight: "15px"}} href="https://ca.linkedin.com/">{<FiLinkedin />}</a>
                    <a style={{marginRight: "15px"}} href="https://www.facebook.com/">{<FiFacebook />}</a>
                    <a style={{marginRight: "15px"}} href="https://www.instagram.com/">{<FiInstagram />}</a>
                    <a style={{marginRight: "15px"}} href="https://twitter.com/?lang=en">{<FiTwitter />}</a>
                </nav>
                
            </div>

            
        </div>
    );
}
export default Footer;