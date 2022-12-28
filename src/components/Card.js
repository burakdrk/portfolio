import React from 'react';
import Button from './Button';
import '../styles/Card.css';
import KennaLogo from '../images/kenna-logo.svg';

const Card = ({title, desc}) => {
    return(  
        <div className='card'>
            <div className='card_img'>
                <img src={KennaLogo} alt='Kenna logo'/>
            </div>
            <div className='card_content'>
                <div className='card_desc'>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
                <Button title={'View'} onClick={() => {window.location.href = '/report/1'}}/>
            </div>
        </div>
    );
};

export default Card;