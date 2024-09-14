import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productsReducer,
  },
});
