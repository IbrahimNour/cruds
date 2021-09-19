import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import crudReducer from "../features/crud/crudSlice";

export const store = configureStore({
  reducer: {
    list: crudReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
