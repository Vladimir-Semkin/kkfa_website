import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Application, State } from './types/types';
import * as api from './api';

const initialState: State = {
  applicationsArr: [],
  error: undefined,
};

export const addApplication = createAsyncThunk(
  'application/add',
  (action: Application) => api.addApplication(action)
);

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    ann: (state, action) => {
      state.applicationsArr.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(addApplication.fulfilled, (state, action) => {
      state.applicationsArr.push(action.payload);
    })
    .addCase(addApplication.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

// export const { ann } = applicationSlice.actions;

export default applicationSlice.reducer;
