import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import {CartContext} from '../CartContext';
import "./cartSidebar.scss";

export const CartSidebar = (props) => {
 
    const [showCartSidebar, setShowCartSidebar] = useState(false);
    const [keepSideBarOpen, setKeepSideBarOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const sleep = m => new Promise(r => setTimeout(r, m));

    useEffect(() => {
        async function handleShowCartSidebar() {
                setShowCartSidebar(true);
                await sleep(7000);
                if (!keepSideBarOpen){
                   setShowCartSidebar(false); 
                }
            }
        if (cart.length > 0) {
            handleShowCartSidebar()
        }

    }, [cart, keepSideBarOpen]);

    useEffect(() => {
        try {
            const cartCopy = [...cart];
            const newTotal = cartCopy.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
            setTotal(newTotal);
        } catch(err) {
            console.log(err);
        }
    }, [cart]);

    return (
        <div className={showCartSidebar ? "cartSidebar active" : "cartSidebar"} onMouseEnter={() =>{if (keepSideBarOpen === false && showCartSidebar === true) {setKeepSideBarOpen(true)}}} onMouseLeave={() => setKeepSideBarOpen(false)}>
            <div className="close-wrapper">
                <span onClick={() => setShowCartSidebar(false)}>X</span>
            </div>
            <div className="items">
                {cart.map(item => {
                    return (
                    <div className="item">
                        <Link  to={`/shop/${item.product.id}`}>
                        <div className="img-wrapper">
                            <img src={item.product.colors[item.color].src} alt={item.product.name}/>
                        </div>
                        <div className="info">
                            <p>{item.product.name}</p>
                            <p className="numbers">{item.quantity} x ${item.product.price}</p>
                            <p>Color: {item.color}</p>
                            <p>Size: {Object.keys(item.product.colors[item.color].stock)[item.size]}</p>
                        </div>
                        </Link>
                    </div>
                    )
                })}
            </div>
            <div className="total-wrapper">
                <h4 className="numbers">Your total is ${total}</h4>
                <Link to="/cart/">View Cart</Link>

            </div>
        </div>
    )
    
}