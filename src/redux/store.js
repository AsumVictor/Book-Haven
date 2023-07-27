import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './book/bookSlice';
import { categoriesReducer } from './category/categorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoriesReducer,
  },
});

export default store;
