import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3009/book');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postBooks = createAsyncThunk(
  'book/postBooks',
  async (Bookdata, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      Bookdata.userName = getState().auth.name;
      const res = await fetch('http://localhost:3009/book', {
        method: 'POST',
        body: JSON.stringify(Bookdata),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBooks = createAsyncThunk(
  'book/deleteBook',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3009/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
