import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ObjAddPart, ObjUpdInput, State } from './types/types';
import * as api from './api';
import { IdRace } from '../LK/types/types';

const initialState: State = {
  participantsArr: [],
  approvedPartArr: [],
  error: undefined,
};

export const initParticipants = createAsyncThunk(
  'part/init',
  (action: IdRace) => api.initParticipants(action),
);
export const addAppInPart = createAsyncThunk('part/add', (action: ObjAddPart) =>
  api.addAppInPart(action),
);
export const delPart = createAsyncThunk('part/delete', (action: ObjAddPart) =>
  api.delPart(action),
);
export const updPart = createAsyncThunk('part/update', (action: ObjUpdInput) =>
  api.updPart(action),
);

const partSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initParticipants.fulfilled, (state, action) => {
        state.approvedPartArr = action.payload;
      })
      .addCase(initParticipants.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addAppInPart.fulfilled, (state, action) => {
        state.participantsArr.push(action.payload);
      })
      .addCase(addAppInPart.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delPart.fulfilled, (state, action) => {
        state.participantsArr = state.participantsArr.filter(
          (participant) => participant.id !== Number(action.payload),
        );
        state.approvedPartArr = state.approvedPartArr.filter(
          (participant) =>
            participant.Application.id !== Number(action.payload),
        );
      })
      .addCase(delPart.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updPart.fulfilled, (state, action) => {
        state.participantsArr = state.participantsArr.map((participant) =>
          participant.id === action.payload.id ? action.payload : participant,
        );
      })
      .addCase(updPart.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default partSlice.reducer;
