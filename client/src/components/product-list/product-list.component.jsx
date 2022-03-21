import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../cart/cart.component';

import {
  countPerPage,
  loadData,
  productsPerPage,
  receivedProducts,
} from '../../redux/products/productsSlice';

import { useGetProductsQuery } from '../../services/productsApi';
import Loader from '../loader/loader.component';
import './product-list.styles.scss';
import Pagination from '../pagination/pagination.component';

function ProductList() {
  const { data = [], isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();

  const products = useSelector(productsPerPage);
  const productPerPage = useSelector(countPerPage);
  const totalProducts = useSelector((state) => state.products?.totalProducts);

  useMemo(() => {
    if (data.length) {
      dispatch(receivedProducts(data));
      dispatch(loadData({ count: data.length }));
    }
  }, [data, dispatch]);

  return (
    <>
      <div className="catalog__cart-container">
        <div className="products__cart cart">
          <div className="cart__container">
            {isLoading ? (
              <Loader />
            ) : (
              products &&
              Object.values(products).map((item) => (
                <Cart key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
      {totalProducts > productPerPage && <Pagination />}
    </>
  );
}

export default ProductList;
