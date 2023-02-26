import { createReducer } from "@reduxjs/toolkit";
import { JokeStructure } from "../models/jokes";
import * as ac from "./joke.actions.creator";

const initialState: JokeStructure[] = [];

export const jokeReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadByIdCreator, (state, { payload }) =>
    state.filter((item) => item.id === payload.id)
  );
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
