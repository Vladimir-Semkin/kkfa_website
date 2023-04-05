import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IdApplication } from '../RegApplication/types/types';
import { State } from './types/types';
import * as api from './api';

const initialState: State = {
  participantsArr: [],
  error: undefined,
};

// export const initApplication = createAsyncThunk(
//   'application/init',
//   (action: IdRace) => api.initApplication(action),
// );
export const addAppInPart = createAsyncThunk(
  'application/init',
  (action: IdApplication) => api.addAppInPart(action),
);

const applSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(initApplication.fulfilled, (state, action) => {
      //     state.applicationsArr = action.payload;
      //   })
      //   .addCase(initApplication.rejected, (state, action) => {
      //     state.error = action.error.message;
      //   })
      .addCase(addAppInPart.fulfilled, (state, action) => {
        state.participantsArr.push(action.payload);
      })
      .addCase(addAppInPart.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default applSlice.reducer;
