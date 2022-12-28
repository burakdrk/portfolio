import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = ({theme}) => {
    const [expandMenu, setExpandMenu] = useState(false);

    return (
        <div className='navbar' id={expandMenu ? 'open' : 'closed'}>
            <div className='navbar_inner'>
                <div className='navbar_item navbar_logo'>
                    <Link to = '/'>Burak Duruk</Link>
                </div>
                <div className='navbar_item navbar_routes'>
                    <Link to = '/'>Home</Link>
                    <Link to = '/report'>Reports</Link>
                    <a href='/resume.pdf' target='_blank' rel='noreferrer'>Resume</a>
                    <DarkModeSwitch checked={theme.isDarkMode} onChange={theme.toggleDarkMode}/>
                    <div className='hamburger_button'>
                        <button onClick={() => setExpandMenu((prev) => !prev)}>
                            <MenuIcon/>
                        </button>
                    </div>
                </div>             
            </div>
            <div className='navbar_mobile_wrapper'>
                <div className='navbar_mobile'>
                    <a href='/'>Home</a>
                    <a href='/report'>Reports</a>
                    <a href='/resume.pdf' target='_blank' rel='noreferrer'>Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
