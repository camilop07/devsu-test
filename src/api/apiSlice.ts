import {
  ApiGetResponse,
  ApiResponse,
  Datum,
} from '@utils/interface/application.interface';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002/',
  }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query<ApiGetResponse, undefined>({
      query: () => ({url: 'bp/products'}),
      providesTags: ['Products'],
    }),
    addProduct: builder.mutation<ApiResponse, Datum>({
      query: data => ({
        url: 'bp/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation<ApiResponse, Datum>({
      query: data => ({
        url: `bp/products/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    validateID: builder.query<boolean, string>({
      query: id => ({url: `bp/products/verification/${id}`}),
    }),
    deleteProduct: builder.mutation<undefined, string>({
      query: id => ({
        url: `bp/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});
