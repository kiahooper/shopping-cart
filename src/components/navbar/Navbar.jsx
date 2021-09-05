import { React, useState, useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { WeatherWidget } from '../weatherWidget/WeatherWidget';
import { MobileMenu } from '../mobileMenu/MobileMenu';
import {CartContext} from '../CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './navbar.scss'

export const Navbar = () => {
    
    const [cart, setCart] = useContext(CartContext);
    const [cartQty, setCartQty] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        try {
            const cartCopy = [...cart];
            const qty = cartCopy.reduce((acc, {quantity}) => acc + quantity, 0);
            setCartQty(qty);
        } catch(err) {
            console.log(err);
        }
    }, [cart]);

    return (
        <div>
            <nav>
        <div className="left">
            <Link className="logo-link" to="/shopping-cart/">
                <div className="logo"><h3 className="logo1">All</h3><h3 className="logo2">Weather</h3></div>
            </Link>
            < WeatherWidget />
        </div>
        <div className="right">
            <div className="web-menu">
                <ul className="nav-links">            
                    <NavLink className="link" activeClassName="link-active" to="/shopping-cart/about">
                        <li>About</li>
                    </NavLink>
                    <div className="shopMenu">
                    <NavLink className="link" activeClassName="link-active" to="/shopping-cart/shop/categories/">
                        <li>Shop</li>
                    </NavLink>
                    <div className="dropDown">
                        <NavLink className="drop-link"to="/shopping-cart/shop/categories/mens">
                            <li>Mens</li>
                        </NavLink>
                        <NavLink className="drop-link" to="/shopping-cart/shop/categories/womens">
                            <li>Womens</li>
                        </NavLink>
                        <NavLink className="drop-link" to="/shopping-cart/shop/categories/accessories">
                            <li>Accessories</li>
                        </NavLink>
                    </div>
                    </div>
                    <NavLink className="link" activeClassName="link-active" to="/shopping-cart/cart">
                        <div className="cart-logo"><ShoppingCartIcon fontSize="large"/><span className="numbers">{cartQty}</span></div>
                    </NavLink>
                </ul>
            </div>
            <div className="mobile-menu">
                <div className={"hamburger " + (menuOpen ? "active" : "")} onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </nav>
    < MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    
    )
}