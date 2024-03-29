import {configureStore} from '@reduxjs/toolkit';
import {asyncFunctionMiddleware} from './middlewares/asyncFunctionMiddleware';
import peoplesReducer from '../components/peoples/peoplesSlice';

export const store: any = configureStore({
  reducer: {
    peoples: peoplesReducer
  },
  middleware: [asyncFunctionMiddleware],
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
