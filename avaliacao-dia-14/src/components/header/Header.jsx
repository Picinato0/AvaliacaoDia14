import React from  'react';
import './header.css';
import Menu from './Menu';
import logo from '../../public/have-fun2.png';

function Header(){
    return(
        <div>
            <header id="header">
                <nav id="container">
                    <div id="logo">  
                        <img src={logo} alt="Logo" />
                    </div>
                    <Menu />
                </nav>
            </header>
        </div>
    );
}

export default Header;