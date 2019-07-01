import React from 'react';
import './Header.css';

function Header(){
    return (
        <div className="header__container">
            <div>
                <img src="https://cdn.auth0.com/blog/react-js/react.png" />
            </div>
            <div>
                Hunter Carrico
            </div>
            <div>
                <img src="https://cdn.auth0.com/blog/react-js/react.png" />
            </div>
        </div> 
    )
}

export default Header;