import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import raceSlice from './features/Calendar/raceSlice';
import resultSlice from './features/Result/resultSlice';
import applicationSlice from './features/Participants/applicationSlice';
import lkSlice from './features/LK/lkSlice';
import authSlice from './Admin/types/auth.slice';
// import adSlice from './features/Ad/adSlice';

const store = configureStore({
  reducer: {
    result: resultSlice,
    race: raceSlice,
    ad: applicationSlice,
    lk: lkSlice,
    auth: authSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
