import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const bookReducer = createReducer(initialState, {
  add: (state, action) => {
    state.books.push(action.payload);
  },
  remove: (state, action) => {
    const { id } = action.payload;
    let newState = state.books.filter((i) => i.id !== id);
    state.books = newState;
  },
});

export const AddBook = (dispatch) => {
  dispatch({
    type: "add",
  });
};

export const RemoveBook = (dispatch) => {
  dispatch({
    type: "remove",
  });
};
