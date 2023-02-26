import { JokeStructure } from "../../models/jokes";

type jokesListProps = {
  info: JokeStructure;
};
export function Joke({ info }: jokesListProps) {
  return (
    <li>
      <p>id: {info.id}</p>
      <p>joke: {info.joke}</p>
      <p>is funny: {info.isFunny}</p>
      <p>already knew it: {info.alreadyKnewIt}</p>
    </li>
  );
}
