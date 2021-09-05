import {React, useState, useEffect, useContext} from 'react';
import {CartContext} from '../CartContext';
import { Link } from 'react-router-dom';
import './cart.scss';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
        const cartCopy = [...cart];
        const newTotal = cartCopy.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
        setTotal(newTotal);
    } catch(err) {
        console.log(err);
    }
}, [cart]);

  const increaseItem = (index) => {
    const cartCopy = [...cart];
    const item = cartCopy[index];
    item.quantity = item.quantity + 1;
    cartCopy[index] = item;
    setCart(cartCopy);
  }

  const decreaseItem = (index) => {
    const cartCopy = [...cart];
    const item = cartCopy[index];
    if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
        cartCopy[index] = item;
        setCart(cartCopy);
    } else {
      removeItem(index);
    }
  }

  const removeItem = (index) => {
    let cartCopy = [...cart];
    cartCopy.splice(index,1);
    setCart(cartCopy);
  } 

  return ( 
      <div className="cart">
        <h2>Shopping Cart</h2>
    {cart.length > 0 ? 
      <div className="table-4cols">
        <div className="table-cell item"><h3>Item</h3></div>
        <div className="table-cell"><h3>Price</h3></div>
        <div className="table-cell"><h3>Quantity</h3></div>
        <div className="table-cell remove"><h3>Remove</h3></div>
        {cart.map((item, index) => {
        return (
            <div className="table-4cols">
              <div className="table-cell item">
                <Link  to={`/shopping-cart/shop/${item.product.id}`}>
                <img src={item.product.colors[item.color].src} alt={item.product.name}/>
                <p>{item.product.name} -</p>
                <p>{item.color} /</p>
                <p>{Object.keys(item.product.colors[item.color].stock)[item.size]}</p>
                </Link>
              </div>
              <div className="table-cell">
                <p className="numbers">${item.product.price}</p>
              </div>
              <div className="table-cell">
                <div className="quantity-wrapper">
                  <button type="button" onClick={()=>decreaseItem(index)}>-</button>
                  <p className="numbers">{item.quantity}</p>
                  <button id={index} type="button" onClick={()=>increaseItem(index)}>+</button>
                </div>
              </div>
              <div className="table-cell remove"><span onClick={()=>removeItem(index)}>X</span></div>
            </div>
        )
        })}
        <div className="total"><h3 className="numbers">Subtotal: ${total}</h3></div>
      </div>
      :
      <div className="empty-cart">
        <h3>Your shopping cart is currently empty.</h3> 
        <Link to="/shopping-cart/shop/categories/" className="cart-link">Continue shopping <span>&rarr;</span></Link>
      </div> 
    }
    </div>
  );
};

export {Cart};