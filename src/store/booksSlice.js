import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: books,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
