import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    
    return (
        <div className="product">
            <div className="product__feature">
                <img src={product.picture} alt="" />
            </div>
            <div className="product__detail">
                <div className="product__description">
                    <div className="product__price">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    <div className="product__rating">
                        <StarHalfIcon className="p__rate" />
                        <p>{product.rating}</p>
                    </div>
                </div>
                <div className="product__button">
                    <button onClick={() => handleAddToCart(product)}><p>Add to Cart</p> <AddShoppingCartIcon className="productToCart" /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;