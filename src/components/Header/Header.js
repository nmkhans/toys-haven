import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/home">Toy<span>'s</span> Haven<span>.</span></a>
                    </div>
                    <div className="header__search">
                        <div className="header__search__box">
                            <SearchIcon className="searchIcon" />
                            <input type="text" placeholder="Search Here" />
                        </div>
                    </div>
                    <div className="header__option">
                        <p>Login/Register</p>
                        <div className="header__option__icon">
                            <CompareArrowsIcon className="headerOpntion__icon" />
                            <FavoriteBorderIcon className="headerOpntion__icon" />
                            <ShoppingBasketIcon className="headerOpntion__icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;