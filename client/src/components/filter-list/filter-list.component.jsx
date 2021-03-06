import React from 'react';
import {NavLink} from "react-router-dom";
import './filter-list.styles.scss'

const FilterList = () => {
    return (
        <>
            <div className="menu__list-name">
                <div className="container">
                    <div className="menu__list-rect"/>
                    <button className="menu__list-name_active">
                        CATEGORY
                    </button>
                </div>
                <div className="menu__item">
                    <div className="menu__item-list item-list">
                        <div className="item-list__wrap">
                            <NavLink to={'/'}>Accessories</NavLink>
                            <NavLink to={'/'}>Bags</NavLink>
                            <NavLink to={'/'}>Denim</NavLink>
                            <NavLink to={'/'}>Hoodies & Sweatshirts</NavLink>
                            <NavLink to={'/'}>Jackets & Coats</NavLink>
                            <NavLink to={'/'}>Polos</NavLink>
                            <NavLink to={'/'}>Shirts</NavLink>
                            <NavLink to={'/'}>Shoes</NavLink>
                            <NavLink to={'/'}>Sweaters & Knits</NavLink>
                            <NavLink to={'/'}>T-Shirts</NavLink>
                            <NavLink to={'/'}>Tanks</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__list-name">
                <div className="container">
                    <div className="menu__list-rect"/>
                    <button>BRAND</button>
                </div>
            </div>
            <div className="menu__list-name">
                <div className="container">
                    <div className="menu__list-rect"/>
                    <button>DESIGNER</button>
                </div>
            </div>
        </>
    );
};

export default FilterList;