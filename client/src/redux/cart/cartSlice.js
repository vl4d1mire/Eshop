import { createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cartItems[action.payload]) {
        state.cartItems[action.payload] += 1;
      } else {
        state.cartItems[action.payload] = 1;
      }
    },
    removeItemFromCart(state, action) {
      delete state.cartItems[action.payload];
    },
    removeAllItemsFromCart(state) {
      state.cartItems = {};
    },
    updateQuantityCart(state, action) {
      const { id, count } = action.payload;
      state.cartItems[id] = count;
    },
  },
});

export const cartList = (state) => state.cart.cartItems;
export const productList = (state) => state.products.products;
export const {
  addItem, removeItemFromCart, removeAllItemsFromCart, updateQuantityCart,
} = cartSlice.actions;
export default cartSlice.reducer;

/**
 * Using memoizing selector
 *
 */
export const getCountItems = createSelector(
  (state) => state.cart?.cartItems,
  (cartItems) => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0)
  },
);

export const getTotalPrice = createSelector(
  (state) => state.cart?.cartItems,
  (state) => state.products?.products,
  (cartItems, products) => {
    return Object.entries(cartItems).reduce((acc, item) => {
      const id = item[0];
      const quantity = item[1];
      return acc + products[id].price * quantity
    }, 0)
  }
);
