import { useJokes } from "../../hook/use.jokes";
import { JokeApiRepo } from "../../services/repository/jokes.api.repo";

export function JokesList() {
  // eslint-disable-next-line new-parens
  const { jokes } = useJokes(new JokeApiRepo());
  return (
    <>
      <h1>Jjejejjejejj</h1>
      <section>
        <ul>
          {jokes.map((item) => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
