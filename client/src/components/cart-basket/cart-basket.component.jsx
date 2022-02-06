import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';
import { cartList, removeAllItemsFromCart } from '../../redux/cart/cartSlice';
import { goods } from '../../redux/products/productsSlice';

import './cart-basket.styles.scss';

function CartBasket() {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartList);
  const products = useSelector(goods);

  return (
    <div className="product__cart">
      {Object.entries(cartItems).map(([id, quantity]) => (
        <CartItem
          key={id}
          id={id}
          image={products[id].image}
          title={products[id].title}
          price={products[id].price}
          quantity={quantity}
        />
      ))}
      <div className="cart__btn">
        <CustomButton onClick={() => dispatch(removeAllItemsFromCart())}>
          CLEAR SHOPPING CART
        </CustomButton>
        <Link to="/">
          <CustomButton>CONTINUE SHOPPING</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default CartBasket;
