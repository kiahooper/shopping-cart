import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './mobileMenu.scss';

export const MobileMenu = (props) => {

    const { menuOpen, setMenuOpen } = props;
    const [shopMenuOpen, setShopMenuOpen] = useState(false);
    
    const closeMenus = () => {
        setMenuOpen(false);
        setShopMenuOpen(false);
    }

    return (
        <div className={"menu " + (menuOpen ? "active" : "")}>
            <ul> 
                <NavLink to="/shopping-cart/" onClick={closeMenus}>
                    <li>Home</li>
                </NavLink>           
                <NavLink to="/shopping-cart/about" onClick={closeMenus}>
                    <li>About</li>
                </NavLink>
                <div className="shop-menu">
                <NavLink to="/shopping-cart/shop/categories/" onClick={()=>setShopMenuOpen(!shopMenuOpen)}>
                    <li>Shop{shopMenuOpen ? <span>&#9650;</span> : <span>&#9660;</span>}</li>
                </NavLink>
                <div className={"dropdown " + (shopMenuOpen ? "active" : "")}>
                    <NavLink to="/shopping-cart/shop/categories/mens" onClick={closeMenus}>
                        <li>Mens</li>
                    </NavLink>
                    <NavLink to="/shopping-cart/shop/categories/womens" onClick={closeMenus}>
                        <li>Womens</li>
                    </NavLink>
                    <NavLink to="/shopping-cart/shop/categories/accessories" onClick={closeMenus}>
                        <li>Accessories</li>
                    </NavLink>
                </div>
                </div>
                
                <NavLink to="/shopping-cart/cart" onClick={()=>setMenuOpen(false)}>
                    <li>Cart</li>
                </NavLink>
            </ul>
        </div>

    )
}
