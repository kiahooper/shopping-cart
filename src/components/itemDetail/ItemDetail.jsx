import { React, useContext, useEffect, useState } from 'react'
import items from '../../data';
import { CartContext } from '../CartContext';
import { CartSidebar } from '../cartSidebar/CartSidebar';
import './itemDetail.scss';

export const ItemDetail = (props) => {

    const [cart, setCart] = useContext(CartContext);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedSize, setSelectedSize] = useState(0);
    const [showCartSidebar, setShowCartSidebar] = useState(true);
    const [imgSrcChange, setImgSrcChange] = useState("");
    const [outOfStock, setOutOfStock] = useState(false);

    const {match} = props;
    const id = parseInt(match.params.id);
    const item = items[id];

    const sleep = m => new Promise(r => setTimeout(r, m));

    useEffect(() => {
        async function handleSrcChange() {
            await setImgSrcChange(selectedColor);
            await sleep(300);
            await setImgSrcChange("");
        }
        handleSrcChange()
    }, [selectedColor]);


    useEffect(() => {
        setOutOfStock(false);
    }, [selectedColor, selectedSize]);

    const addToCart = () => {
        
        // Check if item is already in cart
        const cartCopy = [...cart];
        const cartItem = cartCopy.find(item => parseInt(item.product.id) === id && item.size === selectedSize && item.color === selectedColor);
        const index = cartCopy.findIndex(item => parseInt(item.product.id) === id && item.size === selectedSize && item.color === selectedColor);

        if (checkStock(item, selectedSize, selectedColor) === true) {
            if (cartItem !== undefined) {
                cartItem.quantity = cartItem.quantity + 1;
                cartCopy[index] = cartItem;
                setCart(cartCopy);
            } else {
                cartCopy.push({
                    product: item,
                    size: selectedSize,
                    color: selectedColor,
                    quantity: 1,
                });
                setCart(cartCopy);
            }
        } else {
            setOutOfStock(true);
        }
    }

    const checkStock = (item, size, color) => {
        return (item.colors[color].stock[(Object.keys(item.colors[color].stock)[size])]) > 0;
    }

    return (
    <div key={item.id} className="item-detail">
        <div className="left">
            <div className={imgSrcChange === selectedColor ? "fade active" : "fade"}></div>
            <img src={item.colors[selectedColor].src} alt={item.name}/>
        </div>
        <div className="right">
            <div className="item-content">
                <h3>{item.name}</h3>
                <h3 className="numbers">${item.price}</h3>
                <div className="colors">
                    {
                    Object.keys(item.colors).map(color => {
                        return (
                            <div className={selectedColor === color ? "color-wrapper active" : "color-wrapper"}>
                                <span onClick={()=>setSelectedColor(color)} className={color}></span>
                            </div>
                        )
                    })}
                </div>
                <div className="sizes">
                    {
                    Object.keys(item.colors[selectedColor].stock).map((size, index) => {
                        return (
                            <div className="size-wrapper">
                                <button className={selectedSize === index ? "size-btn active" : "size-btn"} id={index} onClick={()=>setSelectedSize(index)} disabled={!(checkStock(item, index, selectedColor))}>{size}</button>
                            </div>
                        )    
                    }
                    )}
                </div>
                {outOfStock ? <div className="stock-out">Please select a color and size in stock.</div> : ""}
                <button type="button" className="add-to-cart-btn" onClick={addToCart}>Add To Cart</button>
                <p>{item.info}</p>
            </div>
        </div>
        <CartSidebar showCartSidebar={showCartSidebar} setShowCartSidebar={setShowCartSidebar}/>
        </div>
    )
}

