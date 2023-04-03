import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/types';
import * as api from './api';

const initialState: State = {
  resultsArr: [],
  error: undefined,
};

export const initResult = createAsyncThunk('result/init', () =>
  api.initResult(),
);

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initResult.fulfilled, (state, action) => {
        console.log(action.payload);

        state.resultsArr = action.payload;
      })
      .addCase(initResult.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default resultSlice.reducer;
