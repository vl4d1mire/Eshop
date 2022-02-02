import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { getTotalPrice } from '../../redux/cart/cartSlice';
import './product-price.styles.scss';

function ProductPrice() {
  const total = useSelector(getTotalPrice);

  return (
    <div className="product__price">
      <div className="product__price-wrap">
        <div className="price__title">
          SUB TOTAL
          <span>${total}</span>
        </div>
        <div className="price__subtitle">
          GRAND TOTAL
          <span>${total}</span>
        </div>
        <hr className="product__border-line" />
        <div className="price__btn">
          <CustomButton>PROCEED TO CHECKOUT</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default ProductPrice;
