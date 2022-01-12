import React from 'react'
import FormInput from '../form-input/form-input.component'
import ProductPrice from '../product-price/product-price.component'

import './product-order.styles.scss'

const ProductOrder = () => {
    return (
        <div className="product__order">
            <FormInput/>
            <ProductPrice/>
        </div>
    );
};

export default ProductOrder;