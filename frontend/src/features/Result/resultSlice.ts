import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Result, State } from './types/types';
import * as api from './api';

const initialState: State = {
  resultsArr: [],
  error: undefined,
};

export const initResult = createAsyncThunk('result/init', () =>
  api.initResult(),
);
export const addResult = createAsyncThunk('result/add', (action: Result) =>
  api.addResult(action),
);

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initResult.fulfilled, (state, action) => {
        state.resultsArr = action.payload;
      })
      .addCase(initResult.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addResult.fulfilled, (state, action) => {
        state.resultsArr.push(action.payload);
      })
      .addCase(addResult.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default resultSlice.reducer;
