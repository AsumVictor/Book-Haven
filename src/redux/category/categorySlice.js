import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

// Reducers
export const categoriesReducer = createReducer({
  initialState,
  checkstatus: (state) => ({ ...state, status: 'Under Construction' }),
});

// actions
export const CheckStatus = (dispatch) => {
  dispatch({
    type: 'checkstatus',
  });
};
