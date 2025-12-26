
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksState, Book } from '../types';
import { INITIAL_BOOKS } from '../constants';

const initialState: BooksState = {
  items: INITIAL_BOOKS,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      // Add the new book to the beginning of the list as per requirements
      state.items.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
