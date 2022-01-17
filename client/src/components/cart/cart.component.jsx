import React from 'react'
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { addItem } from '../../redux/cart/cartSlice'

import './cart.styles.scss'

const Cart = ({item}) => {
    const {image, logo, title, subtitle, price} = item

    const dispatch = useDispatch()

    return (
        <div className="cart">
            <NavLink className="cart__img" to={'/'} target="_blank">
                <img alt="brands" src={image}/>
            </NavLink>
            <button className="cart__basket" onClick={() => dispatch(addItem(item.id))}>
                <img alt="cart__basket" src={logo}/> Add to Cart
            </button>
            <div className="cart__desc">
                <div className="cart__title">
                    {title}
                </div>
                <p className="cart__text">
                    {subtitle}
                </p>
                <p className="cart__price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default Cart

