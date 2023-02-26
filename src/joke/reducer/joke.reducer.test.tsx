import { JokeStructure } from "../models/jokes";
import {
  addCreator,
  deleteCreator,
  loadByIdCreator,
  loadCreator,
  updateCreator,
} from "./joke.actions.creator";
import { jokeReducer } from "./joke.reducer";

describe("Given the thing reducer", () => {
  describe("When we pass an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as JokeStructure[];

      const action = { type: "" };

      const result = jokeReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });

  describe("When we pass the load action", () => {
    test("Then, it should return the load things", () => {
      const result = jokeReducer([], loadCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the loadOne action", () => {
    test("Then, it should return this one thing", () => {
      const result = jokeReducer([], loadByIdCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the create action", () => {
    test("Then, it should return the new thing created", () => {
      const mockCreate: JokeStructure = {
        id: 2,
        joke: "pepe",
        isFunny: false,
        alreadyKnewIt: false,
      };
      const result = jokeReducer([], addCreator(mockCreate));
      expect(result).toEqual([mockCreate]);
    });
  });

  describe("When we pass the update action", () => {
    test("Then, it should return the initial state", () => {
      const mockState = [
        {
          id: 2,
          joke: "pepe",
          isFunny: false,
          alreadyKnewIt: false,
        },
        {
          id: 3,
          joke: "patata",
          isFunny: false,
          alreadyKnewIt: false,
        },
      ];
      const payload: JokeStructure = {
        id: 3,
        joke: "patata",
        isFunny: false,
        alreadyKnewIt: false,
      };
      const result = jokeReducer(mockState, updateCreator(payload));
      expect(result).toEqual(mockState);
    });
  });
  describe("When we delete an object", () => {
    test("Then it should delete this thing", () => {
      let result = jokeReducer([], deleteCreator);
      expect(result).toEqual([]);
    });
  });
});
