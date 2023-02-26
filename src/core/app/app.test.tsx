import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "./app";

describe("Given the app component", () => {
  describe("When we render it", () => {
    test("Then it should appear on screen", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const element = screen.getByText(/jejejejjejjj/i);
      expect(element).toBeInTheDocument();
    });
  });
});
