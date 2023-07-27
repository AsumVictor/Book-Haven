import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../server";

// fetch actions
export const fetchBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    let errorMessage = error.response
      ? error.response.data.message
      : error.message;
    return errorMessage;
  }
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  try {
    const response = await axios.delete(`${BASE_URL}/books`, book);
    return response.data;
  } catch (error) {
    let errorMessage = error.response
      ? error.response.data.message
      : error.message;
    return errorMessage;
  }
});

export const removeBook = createAsyncThunk("books/removeBook", async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    let errorMessage = error.response
      ? error.response.data.message
      : error.message;
    return errorMessage;
  }
});

const initialState = {
  books: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      const id = action.payload;
      const newState = state.books.filter((i) => i.item_id !== id);
      state.books = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter(i=>i.item_id !==  action.payload);
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

// Reducers
export const bookReducer = bookSlice.reducer;
// // Actions
// export const AddBook = (book) => (dispatch) => {
//   dispatch({
//     type: 'add',
//     payload: book,
//   });
// };

// export const RemoveBook = (id) => (dispatch) => {
//   dispatch({
//     type: 'remove',
//     payload: id,
//   });
// };
