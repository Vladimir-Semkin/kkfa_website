import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Admin, State } from './types';
import * as api from '../api';

const initialState: State = {
  admin: {},
  error: undefined,
};

export const loginAdmin = createAsyncThunk('/auth/log-in', (action: Admin) =>
  api.login(action)
);

export const verificationAdmin = createAsyncThunk('auth/verification', () =>
  api.session()
);

export const logoutAdmin = createAsyncThunk('auth/logout', () => api.logout());

const authSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.admin = action.payload;
        // console.log(action.payload);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(verificationAdmin.fulfilled, (state, action) => {
        console.log(action);
        state.admin = action.payload;
      })
      .addCase(verificationAdmin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutAdmin.fulfilled, (state, action) => {
        state.admin = {};
      })
      .addCase(logoutAdmin.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
