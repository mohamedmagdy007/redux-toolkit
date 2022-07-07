import { createSlice } from '@reduxjs/toolkit';
import { getBooks, postBooks, deleteBooks } from './Actions';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [postBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [postBooks.fulfilled]: (state, action) => {
      state.books.push(action.payload);
      state.isLoading = false;
    },

    [postBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [deleteBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export default bookSlice.reducer;
