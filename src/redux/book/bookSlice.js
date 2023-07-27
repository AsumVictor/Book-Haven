import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
    },
  ],
};

// Reducers
export const bookReducer = createReducer(initialState, {
  add: (state, action) => {
    state.books.push(action.payload);
  },
  remove: (state, action) => {
    const id = action.payload;
    const newState = state.books.filter((i) => i.item_id !== id);
    state.books = newState;
  },
});

// Actions
export const AddBook = (book) => (dispatch) => {
  dispatch({
    type: "add",
    payload: book,
  });
};

export const RemoveBook = (id) => (dispatch) => {
  dispatch({
    type: "remove",
    payload: id,
  });
};
