import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hide_book_form: boolean;
}

const initialState: UtilState = {
  hide_book_form: true,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    handleHideBookForm: (state) => {
      state.hide_book_form = !state.hide_book_form;
    },
  },
});

export const { handleHideBookForm } = utilSlice.actions;

export default utilSlice.reducer;
