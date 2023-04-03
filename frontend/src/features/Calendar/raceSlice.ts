import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/types';
import * as api from './api';

const initialState: State = {
  racesArr: [],
  error: undefined,
};

export const initRace = createAsyncThunk('race/init', () => api.initRace());

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initRace.fulfilled, (state, action) => {
        state.racesArr = action.payload;
      })
      .addCase(initRace.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default raceSlice.reducer;
