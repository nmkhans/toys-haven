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

    const emptyCart = () => {
        const emptyProduct = [];
        setProducts(emptyProduct);
    }

    const randomNumber = () => {
        let number = Math.round(Math.random() * (products.length - 1));
        return number;
    }

    const selectOne = () => {
        let number = randomNumber();
        const selectedProduct = [];
        for(let product of products) {
            if(products.indexOf(product) === number) {
                selectedProduct.push(product);
           } 
        }
        setProducts(selectedProduct)
    }

    return (
        <div className="shop">
            <div className="inner__shop">
                <div className="shop__content">
                    {/* Products */}
                    <Products handleAddToCart={handleAddToCart}/>
                    {/* Cart */}
                    <Cart products={products} emptyCart={emptyCart} selectOne={selectOne}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;