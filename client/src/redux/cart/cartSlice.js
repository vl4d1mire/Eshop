import { createSelector, createSlice } from '@reduxjs/toolkit';

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
      const { id, quantity } = action.payload;
      state.cartItems[id] = quantity;
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
    let countItems = 0;
    for (const id in cartItems) {
      countItems += cartItems[id];
    }
    return countItems;
  },
);

export const getTotalPrice = createSelector(
  (state) => state.cart?.cartItems,
  (state) => state.products?.products,
  (cartItems, products) => {
    let total = 0;
    for (const id in cartItems) {
      total += products[id].price * cartItems[id];
    }
    return total;
  },
);
