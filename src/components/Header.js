import React from 'react';
import '../css/header.css';


function Header(){
    return(
        <div className="header">
            <div className="contact">
                <span>Montpellier, France</span>
                <span>lucas11ferrier@gmail.com</span>
            </div>
            <div className="link">
                <a href="https://github.com/"><i className="fab fa-github"></i></a>
                <a href="https://github.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Header;