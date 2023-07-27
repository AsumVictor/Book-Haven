import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      "item_id": "item1",
      "title": "The Great Gatsby",
      "author": "John Smith",
      "category": "Fiction"
    },
    {
      "item_id": "item2",
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "category": "Fiction"
    },
    {
      "item_id": "item3",
      "title": "The Selfish Gene",
      "author": "Richard Dawkins",
      "category": "Nonfiction"
    }
  ],
};

// Reducers
export const bookReducer = createReducer(initialState, {
  add: (state, action) => {
    state.books.push(action.payload);
  },
  remove: (state, action) => {
    const { id } = action.payload;
    const newState = state.books.filter((i) => i.id !== id);
    state.books = newState;
  },
});

// Actions
export const AddBook = (dispatch) => {
  dispatch({
    type: 'add',
  });
};

export const RemoveBook = (dispatch) => {
  dispatch({
    type: 'remove',
  });
};
