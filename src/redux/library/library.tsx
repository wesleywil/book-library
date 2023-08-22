import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LibraryState {
  section_status: string;
}

const initialState: LibraryState = {
  section_status: "Favorites" || "Reading" || "Want To Read" || "Read",
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    switchLibrarySection: (state, action: PayloadAction<string>) => {
      state.section_status = action.payload;
    },
  },
});

export const { switchLibrarySection } = librarySlice.actions;

export default librarySlice.reducer;
