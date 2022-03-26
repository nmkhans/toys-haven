import React from 'react';
import CartItem from '../CartItem/CartItem';
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import './Cart.css';

const Cart = ({products, emptyCart, selectOne}) => {
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
                <div className="cart__button">
                    <button onClick={selectOne}><span>Select One</span> <ShuffleIcon /></button>
                    <button onClick={emptyCart}><span>Empty Cart</span> <DeleteIcon /></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;