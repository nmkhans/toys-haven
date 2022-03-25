import React, { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    const handleAddToCart = (product) => {
        const newProduct = [...products, product];
        if(newProduct.length <= 4) {
            setProducts(newProduct);
        } else {
            alert('maximum amount reached');
        }
    }
    return (
        <div className="shop">
            <div className="inner__shop">
                <div className="shop__content">
                    {/* Products */}
                    <Products handleAddToCart={handleAddToCart}/>
                    {/* Cart */}
                    <Cart products={products}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;