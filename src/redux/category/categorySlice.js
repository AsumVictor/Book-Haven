import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "",
};

export const categoriesReducer = createReducer({
  initialState,
  checkstatus: (state) => ({ ...state, status: "Under Construction" }),
});

export const CheckStatus = (dispatch) => {
  dispatch({
    type: "checkstatus",
  });
};

export default categoriesSlice.reducer;
