import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  updateQuantityCart,
} from '../../redux/cart/cartSlice';

import './cart-item.styles.scss';

function CartItem({ id, image, title, price, quantity }) {
  const dispatch = useDispatch();

  function onQuantityChanged(e) {
    const count = Number(e.target.value) || 0;

    dispatch(updateQuantityCart({ id, count }));
  }

  return (
    <div className="cart__item">
      <div className="cart__image">
        <img alt="Product" src={image} />
      </div>
      <div className="cart__info">
        <div className="cart__title">{title}</div>
        <button type="button" onClick={() => dispatch(removeItemFromCart(id))}>
          X
        </button>
        <div className="cart__descr">
          <div className="cart__data">
            Price:
            <span className="cart__data_red">${price}</span>
          </div>
          <div className="cart__data">
            Color:
            <span>Red</span>
          </div>
          <div className="cart__data">
            Size:
            <span>XS</span>
          </div>
          <div className="cart__data">
            <label htmlFor="cart__quantity" className="cart__quantity">
              Quantity:
              <input
                onBlur={(e) => onQuantityChanged(e)}
                defaultValue={quantity}
                type="number"
                id="cart__quantity"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.defaultProps = {
  id: '0',
  image: '',
  title: '',
  price: '',
  quantity: 0,
};

CartItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartItem;
