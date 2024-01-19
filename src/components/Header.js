import React, { useState } from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleNavMenuClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='template-width'>
            <div className='menu-wrapper'>
                <div className={`content-header ${isActive ? 'activee' : ''}`}>
                    <div className='logo'><a href="index.html"><img src={logo} alt="Logo" width="49" height="72" /></a></div>
                    <Navbar onNavMenuClick={handleNavMenuClick} />
                </div>
            </div>
        </div>
    );
}

export default Header;
