import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({products}) => {
    return (
        <div className="cart">
            <div className="inner__cart container">
                <div className="cart__title">
                    <h2>Cart</h2>
                </div>
                <div className="cart__products">
                    {/* Cart Item */}
                    {
                        products.map(product => <CartItem key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;