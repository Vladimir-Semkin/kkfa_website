import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IdRace, Race, State } from './types/types';
import * as api from './api';

const initialState: State = {
  racesArr: [],
  photoArr: [],
  error: undefined,
};

export const initRace = createAsyncThunk('race/init', () => api.initRace());
export const addRace = createAsyncThunk('race/add', (action: Race) =>
  api.addRace(action)
);
export const delRace = createAsyncThunk('race/delete', (action: IdRace) =>
  api.delRace(action)
);
export const updRace = createAsyncThunk('race/update', (action: Race) =>
  api.updRace(action)
);

export const photoRouter = createAsyncThunk('photo/add', (action: any) =>
  api.photoRouter(action)
);

const lkSlice = createSlice({
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
      })
      .addCase(addRace.fulfilled, (state, action) => {
        state.racesArr.push(action.payload);
      })
      .addCase(addRace.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delRace.fulfilled, (state, action) => {
        state.racesArr = state.racesArr.filter(
          (race) => race.id !== Number(action.payload)
        );
      })
      .addCase(delRace.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updRace.fulfilled, (state, action) => {
        state.racesArr = state.racesArr.map((race) =>
          race.id === action.payload.id ? action.payload : race
        );
      })
      .addCase(updRace.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(photoRouter.fulfilled, (state, action) => {
        state.photoArr = action.payload;
      })
      .addCase(photoRouter.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default lkSlice.reducer;
