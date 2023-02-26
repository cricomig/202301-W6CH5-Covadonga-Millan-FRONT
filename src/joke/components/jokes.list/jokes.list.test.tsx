import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { JokesList } from "./jokes.list";

describe("Given the things list page", () => {
  render(
    <Provider store={store}>
      <JokesList></JokesList>
    </Provider>
  );
});
describe("When it is rendered", () => {
  test("Then it should display the 'Things list' heading", () => {
    const headingElement = screen.getByRole("list");
    expect(headingElement).toBeInTheDocument();
  });
});
