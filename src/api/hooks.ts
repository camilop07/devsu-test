import {apiSlice} from '@api/index';

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useLazyValidateIDQuery,
  useDeleteProductMutation,
} = apiSlice;
