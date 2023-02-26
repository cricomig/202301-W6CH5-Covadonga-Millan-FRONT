import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store/store";
import { JokeApiRepo } from "../services/repository/jokes.api.repo";
import * as ac from "../reducer/joke.actions.creator";
import { JokeStructure, ProtoJokeStructure } from "../models/jokes";

export function useJokes(repo: JokeApiRepo) {
  const jokes = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadJokes = async () => {
      try {
        const data = await repo.loadJokes();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadJokes();
  }, [dispatch, repo]);

  const addJoke = async (task: ProtoJokeStructure) => {
    try {
      const finalJoke = await repo.createJoke(task);
      dispatch(ac.addCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateJoke = async (task: Partial<JokeStructure>) => {
    try {
      const finalJoke = await repo.updateJoke(task);
      dispatch(ac.updateCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteJoke = async (id: JokeStructure["id"]) => {
    try {
      repo.deleteJoke(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    jokes,
    addJoke,
    updateJoke,
    deleteJoke,
  };
}
