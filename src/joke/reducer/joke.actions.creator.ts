import { createAction } from "@reduxjs/toolkit";
import { JokeStructure } from "../models/jokes";
import { jokesActions } from "./jokes.actions.types";

export const loadCreator = createAction<JokeStructure[]>(jokesActions.load);
export const loadByIdCreator = createAction<JokeStructure>(
  jokesActions.loadById
);
export const addCreator = createAction<JokeStructure>(jokesActions.add);
export const updateCreator = createAction<JokeStructure>(jokesActions.update);
export const deleteCreator = createAction<JokeStructure["id"]>(
  jokesActions.delete
);
