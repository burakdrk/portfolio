import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer_container'>
                <ul>
                    <li>
                        <a href='https://github.com/burakdrk' target='_blank' rel='noreferrer'>Github</a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/bdrk' target='_blank' rel='noreferrer'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='mailto:burakduruk52@gmail.com' target='_blank' rel='noreferrer'>Contact</a>
                    </li>
                </ul>
            </div>
            <small>Copyright © 2023 Burak Duruk</small>
        </footer>
    );
}

export default Footer;
