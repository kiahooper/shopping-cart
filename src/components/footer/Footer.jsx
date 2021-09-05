import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
    return (
        <div className="footer"> 
        <Link to="/shopping-cart/about">About us</Link>
            <p>All shop images credited to © RAINS 2021</p>
        </div>
    )
}
