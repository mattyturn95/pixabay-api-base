import React from 'react';
import AlbertImage from '../img/albert.png';

const Header = () => {
    return (
        <div>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>

            <div className='header-image'>
                <img src={AlbertImage} alt='Albert png sketch' />
            </div>
        </div>
    )
}

export default Header
