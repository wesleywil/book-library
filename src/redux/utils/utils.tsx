import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hide_book_form: boolean;
  hide_book_options: boolean;
  hide_add_book_options: boolean;
}

const initialState: UtilState = {
  hide_book_form: true,
  hide_book_options: true,
  hide_add_book_options: true,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    handleHideBookForm: (state) => {
      state.hide_book_form = !state.hide_book_form;
    },
    handleHideBookOptions: (state) => {
      state.hide_book_options = !state.hide_book_options;
    },
    handleHideAddBookOptions: (state) => {
      state.hide_add_book_options = !state.hide_add_book_options;
    },
  },
});

export const {
  handleHideBookForm,
  handleHideBookOptions,
  handleHideAddBookOptions,
} = utilSlice.actions;

export default utilSlice.reducer;
