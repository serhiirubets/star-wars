import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import {asyncFunctionMiddleware} from './middlewares/asyncFunctionMiddleware';
import peoplesReducer from '../components/peoples/peoplesSlice';
const rootReducer = combineReducers({
  peoplesReducer
});

export const store: any = configureStore({
  reducer: {
    peoples: peoplesReducer
  },
  middleware: [asyncFunctionMiddleware],
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
