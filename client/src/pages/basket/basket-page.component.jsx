import { useSelector } from 'react-redux';
import Title from '../../components/title/title.component';
import CartBasket from '../../components/cart-basket/cart-basket.component';
import ProductOrder from '../../components/product-order/product-order.component';
import { cartList } from '../../redux/cart/cartSlice';
import EmptyBasket from '../../components/empty-basket/empty-basket.component';

import './basket-page.styles.scss';

function BasketPage() {
  const cartItems = useSelector(cartList);

  return (
    <div className="content">
      <div className="product">
        <Title />
        <div className="product__container">
          {Object.keys(cartItems).length ? (
            <>
              <CartBasket />
              <ProductOrder />
            </>
          ) : (
            <EmptyBasket />
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
