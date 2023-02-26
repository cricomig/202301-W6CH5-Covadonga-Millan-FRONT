import { JokeStructure } from "../../models/jokes";
import { JokeApiRepo } from "./jokes.api.repo";

const repo = new JokeApiRepo();

describe("Given the Jokes repo", () => {
  describe("When we use loadJokes", () => {
    test("Then, if it's ok, it should equal", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([{ joke: "patata" }]),
      });

      expect(repo).toBeInstanceOf(JokeApiRepo);
      const loadJokes = await repo.loadJokes();
      expect(loadJokes).toEqual([{ joke: "patata" }]);
    });
  });
  describe("When we use loadJokes and fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const loadJokes = repo.loadJokes();
      await expect(loadJokes).rejects.toThrow();
    });
  });

  describe("When it calls the method getJoke", () => {
    test("Then it should return the item with the same id", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          id: 3,
          joke: "patata",
        }),
      });

      const getJoke = await repo.loadByIdJoke(3);
      expect(getJoke).toEqual({ id: 3, joke: "patata" });
    });
  });
  describe("When getJoke fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const getJoke = repo.loadByIdJoke(420);
      await expect(getJoke).rejects.toThrow();
    });
  });

  describe("When we use createJoke", () => {
    test("Then it should return the value created", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 1, joke: "patata" }),
      });

      const createJoke = await repo.createJoke({
        joke: "patata",
        isFunny: false,
        alreadyKnewIt: false,
      });
      expect(createJoke).toEqual({ id: 1, joke: "patata" });
    });
  });
  describe("When createJoke fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const createJoke = repo.createJoke({
        joke: "patata",
        isFunny: false,
        alreadyKnewIt: false,
      });
      await expect(createJoke).rejects.toThrow();
    });
  });

  describe("When we use updateJoke", () => {
    test("Then it should return the updated value as the user wants", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 1, joke: "patata" }),
      });

      const update = await repo.updateJoke({
        test: "Pepe",
      } as unknown as Partial<JokeStructure>);
      expect(update).toEqual({ id: 1, joke: "patata" });
    });
  });
  describe("When update method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const update = repo.updateJoke({
        joke: "patata",
      } as unknown as Partial<JokeStructure>);
      await expect(update).rejects.toThrow();
    });
  });

  describe("When we use deleteJoke", () => {
    test("Then it should return undefined", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });

      const deleteJoke = await repo.deleteJoke(2);
      expect(fetch).toHaveBeenCalled();
      expect(deleteJoke).toBe(undefined);
    });
  });
  describe("When delete method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const deleteJoke = repo.deleteJoke(1);
      await expect(deleteJoke).rejects.toThrow();
    });
  });
});
