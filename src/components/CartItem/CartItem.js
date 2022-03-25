import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartItem.css';

const CartItem = ({product}) => {
    console.log(product);
    return (
        <div className="cartItem">
            <div className="inner__cartItem">
                <div className="cartItem__content">
                    <div className="cartItem__img">
                        <img src={product.picture} alt="" />
                    </div>
                    <div className="cartItem__name">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="cartItem__button">
                        <button><DeleteIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;