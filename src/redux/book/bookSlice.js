import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../server";
import convertData from "../../helpers/convertData";
// fetch actions
export const fetchBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    let errorMessage = error.response
      ? error.response.data.error.message
      : error.message;
    return errorMessage;
  }
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, book);
    if (!response.data) {
      throw new Error("Error occured! Try again");
    }
    return book;
  } catch (error) {
    console.log(error);
    let errorMessage = error.response
      ? error.response.data.message
      : error.message;
    return errorMessage;
  }
});

export const removeBook = createAsyncThunk("books/removeBook", async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/books/${id}`);
    if (!response.data) {
      throw new Error("Error occured! Try again");
    }
    return id;
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
  adding: false,
  addedSuccess: false,
  addedError: null,
  deleting: false,
  deletedSuccess: false,
  deletedError: null,
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
        const data = convertData(action.payload);
        state.books = data;
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
        state.adding = true;
        state.addedError = null;
        state.addedSuccess = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
        state.adding = false;
        state.addedError = null;
        state.addedSuccess = true;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.adding = false;
        state.addedError = action.payload;
        state.addedSuccess = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.deleting = true;
        state.deletedSuccess = false;
        state.deletedError = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((i) => i.id !== action.payload);
        state.deleting = false;
        state.deletedSuccess = true;
        state.deletedError = null;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.deleting = false;
        state.deletedSuccess = false;
        state.deletedError = action.payload;
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
