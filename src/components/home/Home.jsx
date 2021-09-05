import { React} from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => {
    return (
        <div className="index">
            <div className="img-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/images/heroIndex.jpg`} alt="woman in rain"></img>
            </div>
            <div className="index-info">
                <h2>Get Prepared</h2>
                <h3>View our full range of weather wear</h3>
                <Link to="/shopping-cart/shop/categories/"><span>Shop now</span></Link>
            </div>
        </div>

    )
}