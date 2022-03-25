import React from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop">
            <div className="inner__shop">
                <div className="shop__content">
                    {/* Products */}
                    <Products />
                    {/* Cart */}
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Shop;