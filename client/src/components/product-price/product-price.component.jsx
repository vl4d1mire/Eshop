import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './product-price.styles.scss'
import {useSelector} from "react-redux";
import {getTotalPrice} from "../../redux/cart/cartSlice";

const ProductPrice = () => {

    const total = useSelector(getTotalPrice)

    return (
        <div className="product__price">
            <div className="product__price-wrap">
                <div className="price__title">SUB TOTAL <span>${ total }</span></div>
                <div className="price__subtitle">GRAND TOTAL <span>${ total }</span></div>
                <hr className="product__border-line"/>
                <div className="price__btn">
                    <CustomButton>PROCEED TO CHECKOUT</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice