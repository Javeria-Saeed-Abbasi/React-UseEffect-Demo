import React from 'react';
// import logo2 from './logo2.png';
import App from '../App.css';


const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                LOGO {/*<img src={require('./logo2.png')} alt="Logo"/> */}
            </div>
            <h1>Food Searching App</h1>
        </div>
    )

}

export default Header;