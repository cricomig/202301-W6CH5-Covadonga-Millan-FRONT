import { configureStore } from "@reduxjs/toolkit";
import { jokeReducer } from "../../joke/reducer/joke.reducer";

export const store = configureStore({
  reducer: {
    jokes: jokeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
