import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://3001-vl4d1mire-shop-xhfxvsb1pac.ws-eu27.gitpod.io/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'goods',
    }),
    listProducts: builder.query({
      query: (page = 1) => `goods?_page=${page}&_limit=3`,
    }),
  }),
});

export const { useGetProductsQuery, useListProductsQuery } = productsApi;
