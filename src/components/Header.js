import React from 'react';
import logo2 from '../images/logo2.PNG';
import App from '../App.css';


const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src={logo2} alt="Logo" width="100%" height="100"/>
            </div>
            <h1>Food Searching App</h1>
        </div>
    )

}

export default Header;