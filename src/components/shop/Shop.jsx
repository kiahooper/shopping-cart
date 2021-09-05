import { React, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import items from '../../data';
import './shop.scss';
import { useLocation } from 'react-router-dom'; 

export const Shop = (props) => {

    const {match} = props;

    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [imgSrcChange, setImgSrcChange] = useState("");
        
    const location = useLocation();

    const sleep = m => new Promise(r => setTimeout(r, m));
    
    useEffect(() => {
        try {
            let category = match.params.category;
            setSelectedCategory(category);
        } catch(err) {
            console.log(err)
        }        
    }, [location]);

    useEffect(() => {
        async function handleSrcChange() {
            await setImgSrcChange(selectedColor);
            await sleep(300);
            await setImgSrcChange("");
        }
        handleSrcChange()
    }, [selectedColor])


    const getImgSource = (item) => {
        try {
            if (item.id === selectedItem) {
                return item.colors[selectedColor].src
            } else {
                return item.colors["black"].src
            }
        } catch(err) {
            console.log(err.message);
        }
    }


    
    return (
    <div className="shop">
        <h2 className="category-name">{ selectedCategory!== "" && selectedCategory !== undefined ? selectedCategory : "All"}</h2>
        <div className="items">
            {items.map(item => {
                if (selectedCategory === "" || selectedCategory === undefined || item.category === selectedCategory) {
                    return (
                        <div key={item.id} className="item" onMouseEnter={()=>setSelectedItem(item.id)} onMouseLeave={()=>setSelectedColor("black")}>
                            <Link  to={`/shopping-cart/shop/${item.id}`}>
                                <div className="img-wrapper">
                                <div className={imgSrcChange === selectedColor && selectedItem === item.id ? "fade active" : "fade"}></div>
                                    <img src={getImgSource(item)} alt={item.name}/>
                                </div>
                                <div className="itemInfo">
                                    <h3>{item.name}</h3>
                                    <h3 className="numbers">${item.price}</h3>
                                    <div className="colors">
                                        {
                                        Object.keys(item.colors).map(color => {
                                            return (
                                                <div className="color-wrapper">
                                                    <span onMouseEnter={()=>setSelectedColor(color)} className={color}></span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            })}
        </div>
    </div>
    )
}