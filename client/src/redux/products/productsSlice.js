import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
  filteredProducts: [],
  appliedFilters: [],
  currentPage: 1,
  initMaxPageNumberLimit: 4,
  minPageNumberLimit: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    receivedProducts(state, action) {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
    filterByValue(state, action) {
      const { value } = action.payload;

      if (!state.appliedFilters) {
        state.appliedFilters = [];
      }

      const { appliedFilters } = state;

      if (value) {
        const index = state.appliedFilters.indexOf('filterByValue');
        if (index === -1) {
          appliedFilters.push('filterByValue');
        }
        state.filteredProducts = Object.values(state.products).filter((product) => product.title.toLowerCase().includes(value));
      } else {
        const index = appliedFilters.indexOf('filterByValue');
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          state.filteredProducts = state.products;
        }
      }
    },
    loadData(state, action) {
      const { count } = action.payload;
      const countPerPage = action.payload?.counterPerPage || 6;
      const totalPage = Math.ceil(count / countPerPage);
      state.maxPageNumberLimit = state.initMaxPageNumberLimit
      state.totalProducts = count
      state.countPerPage = countPerPage;
      state.totalPage = totalPage;
      state.pageNumberLimit = 4;
      state.productsPerPage = Object.values(state.products).slice(state.currentPage * countPerPage - countPerPage, state.currentPage * countPerPage);
      if (state.appliedFilters.length > 0) {
        state.productsPerPage = Object.values(state.filteredProducts).slice(state.currentPage * countPerPage - countPerPage, state.currentPage * countPerPage);
        state.totalPage = Math.ceil(state.filteredProducts.length / countPerPage)
        state.totalProducts = state.filteredProducts.length
      }
    },
    loadNewPage(state, action) {
      const addPage = action.payload.page;
      state.currentPage += addPage;
      const itemsPerPage = state.countPerPage;
      const indexOfLastItem = state.currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      if (addPage === 1 && (state.currentPage) > state.maxPageNumberLimit) {
        state.maxPageNumberLimit += state.pageNumberLimit;
        state.minPageNumberLimit += state.pageNumberLimit;
      }

      if (addPage === -1 && ((state.currentPage) % state.pageNumberLimit === 0)) {
        state.maxPageNumberLimit -= state.pageNumberLimit;
        state.minPageNumberLimit -= state.pageNumberLimit;
      }
      state.productsPerPage = Object.values(state.products).slice(indexOfFirstItem, indexOfLastItem)
        if (state.appliedFilters > 0) {
        state.productsPerPage = Object.values(state.filteredProducts).slice(indexOfFirstItem, indexOfLastItem)
      }
    },
    loadExactPage(state, action) {
      const exactPage = action.payload.page;
      const indexOfLastItem = state.countPerPage * exactPage;
      const indexOfFirstItem = indexOfLastItem - state.countPerPage;

      state.productsPerPage = Object.values(state.products).slice(indexOfFirstItem, indexOfLastItem);
      state.currentPage = exactPage;

      if (state.currentPage === 1) {
        state.maxPageNumberLimit = state.initMaxPageNumberLimit
        state.minPageNumberLimit = 0
      } else if (state.currentPage === state.totalPage) {
        state.maxPageNumberLimit = state.totalPage
        state.minPageNumberLimit = state.maxPageNumberLimit - state.initMaxPageNumberLimit
      }

      if (state.appliedFilters.length > 0) {
        state.productsPerPage = Object.values(state.filteredProducts).slice(indexOfFirstItem, indexOfLastItem)
      }
  },
},
});

export const goods = (state) => state.products.products;
export const goodsFiltered = (state) => state.products.filteredProducts;
export const productsPerPage = (state) => state.products.productsPerPage;
export const countPerPage = (state) => state.products.countPerPage;
export const maxPageNumberLimit = (state) => state.products.maxPageNumberLimit;
export const {
  receivedProducts, filterByValue, loadNewPage, loadData, loadExactPage,
} = productsSlice.actions;
export default productsSlice.reducer;
