import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import './CartItem.css';

const CartItem = ({product}) => {
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
                        <button><ClearIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;