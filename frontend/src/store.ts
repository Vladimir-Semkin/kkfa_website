import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import applicationSlice from './features/Participants/applicationSlice';
import authSlice from './Admin/types/auth.slice';
// import adSlice from './features/Ad/adSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    ad: applicationSlice,
    auth: authSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
