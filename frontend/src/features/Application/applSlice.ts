import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from '../RegApplication/types/types';
import { IdRace } from '../Calendar/types/types';
import * as api from './api';

const initialState: State = {
  applicationsArr: [],
  error: undefined,
};

export const initApplication = createAsyncThunk(
  'application/init',
  (action: IdRace) => api.initApplication(action),
);

const applSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initApplication.fulfilled, (state, action) => {
        state.applicationsArr = action.payload;
      })
      .addCase(initApplication.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default applSlice.reducer;
