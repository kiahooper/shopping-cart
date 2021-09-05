import {Navbar} from './components/navbar/Navbar';
import {Index} from './components/index/Index';
import {About} from './components/about/About';
import {Cart} from './components/cart/Cart';
import {Shop} from './components/shop/Shop';
import {ItemDetail} from './components/itemDetail/ItemDetail';
import {Footer} from './components/footer/Footer';
import {CartProvider} from './components/CartContext';

import {BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

export default function Content() {

    let location = useLocation()

    return (
        <div className="content">
        <CartProvider>
          <Navbar/>
          <div className="inner-content">
          <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route path="/" exact component={Index}/>
              <Route path="/about" component={About}/>
              <Route path="/shop/categories/:category?" render={(props) => <Shop {...props}/>}/>
              <Route path="/shop/:id" render={(props) => <ItemDetail {...props}/>}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
            </CSSTransition>
            </TransitionGroup>
          </div>
        </CartProvider>
        <Footer />
        </div>
    )
}
