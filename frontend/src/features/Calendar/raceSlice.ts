import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IdRace, Race, State } from './types/types';
import * as api from './api';
import * as apiLK from '../LK/api';

const initialState: State = {
  racesArr: [],
  error: undefined,
};

export const initRace = createAsyncThunk('race/init', () => api.initRace());
// export const addRace = createAsyncThunk('race/add', (action: Race) =>
//   apiLK.addRace(action),
// );
// export const delRace = createAsyncThunk('race/delete', (action: IdRace) =>
//   apiLK.delRace(action),
// );

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initRace.fulfilled, (state, action) => {
        state.racesArr = action.payload;
        state.error = undefined;

      })
      .addCase(initRace.pending, (state, action) => {
        state.error = 'Загрузка...';

      })
      // .addCase(initRace.pending, (state, action) => {
      //   state.error = 'загрузка';
      // })

      .addCase(initRace.rejected, (state, action) => {
        state.error = action.error.message;
      });
    // .addCase(addRace.fulfilled, (state, action) => {
    //   state.racesArr.push(action.payload);
    // })
    // .addCase(addRace.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
    // .addCase(delRace.fulfilled, (state, action) => {
    //   state.racesArr = state.racesArr.filter(
    //     (race) => race.id !== Number(action.payload),
    //   );
    // })
    // .addCase(delRace.rejected, (state, action) => {
    //   state.error = action.error.message;
    // });
  },
});

export default raceSlice.reducer;
