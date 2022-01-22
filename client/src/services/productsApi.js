import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
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
