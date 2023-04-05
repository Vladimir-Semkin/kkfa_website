import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import raceSlice from './features/Calendar/raceSlice';
import resultSlice from './features/Result/resultSlice';
import applicationSlice from './features/RegApplication/applicationSlice';
import lkSlice from './features/LK/lkSlice';
import authSlice from './features/Admin/types/auth.slice';
import applSlice from './features/Application/applSlice';
import partSlice from './features/Participant/partSlice';

const store = configureStore({
  reducer: {
    result: resultSlice,
    race: raceSlice,
    ad: applicationSlice,
    lk: lkSlice,
    auth: authSlice,
    application: applSlice,
    participant: partSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
