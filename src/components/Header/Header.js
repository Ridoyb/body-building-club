import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>Body Building Club</h1>
        <div>
            <a href="\home">Home</a>
            <a href="\blog">Blog</a>
            <a href="\services">Services</a>
            <a href="\members">Members</a>
        </div>
    </nav>
    );
};

export default Header;