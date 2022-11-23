import './header.css';
import React from 'react';

function Header(){
    return (
        <div id = "header">
            <p id = "my-name">Portfólio </p>
            <li id = "header-right-side">
                <p><a href="#section2"> Sobre mim</a></p>
                <p className='center-P'><a href="#section3">Projetos</a></p>
                <p className='center-P'><a href="#section4">conhecimentos</a></p>
            </li>
        </div>
    )
}

export default Header;

