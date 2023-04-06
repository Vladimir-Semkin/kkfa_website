import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from '../RegApplication/types/types';
import { IdRace } from '../Calendar/types/types';
import * as api from './api';
import { ObjAddPart } from '../Participant/types/types';

const initialState: State = {
  applicationsArr: [],
  error: undefined,
};

export const initApplication = createAsyncThunk(
  'application/init',
  (action: IdRace) => api.initApplication(action),
);
export const delAppl = createAsyncThunk('appl/delete', (action: ObjAddPart) =>
  api.delAppl(action),
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
      })
      .addCase(delAppl.fulfilled, (state, action) => {
        console.log(state.applicationsArr);
        console.log(action);

        state.applicationsArr = state.applicationsArr.filter(
          (application) => application.id !== Number(action.payload),
        );
      })
      .addCase(delAppl.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default applSlice.reducer;
