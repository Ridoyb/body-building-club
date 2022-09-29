import React from 'react';
import './Header.css'
import img from './logo-icon.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='site-name'>
            <img src={img} alt="" />
            <h1>Body Building Club</h1>
            </div>
            <div className='select-exercise'>
            
            <h3>Select Exercise:</h3>
            </div>
    </div>
    );
};

export default Header;