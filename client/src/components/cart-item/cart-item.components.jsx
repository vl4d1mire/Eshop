import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
	removeItemFromCart,
	updateQuantityCart,
} from '../../redux/cart/cartSlice';

import './cart-item.styles.scss';

function CartItem({ id, image, title, price, quantity }) {
	const dispatch = useDispatch();
	console.log(quantity);

	function onQuantityChanged(e) {
		const quantity = Number(e.target.value) || 0;

		dispatch(updateQuantityCart({ id, quantity }));
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
						</label>
						<input
							onBlur={(e) => onQuantityChanged(e, id)}
							defaultValue={quantity}
							type="number"
							id="cart__quantity"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

// CartItem.defaultProps = {
// 	id: 0,
// 	image: '',
// 	title: '',
// 	price: 0,
// 	quantity: 0,
// };

// CartItem.propTypes = {
// 	id: PropTypes.number,
// 	image: PropTypes.string,
// 	title: PropTypes.string,
// 	price: PropTypes.number,
// 	quantity: PropTypes.number,
// };

export default CartItem;
