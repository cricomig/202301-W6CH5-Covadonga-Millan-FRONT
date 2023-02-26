import React from "react";
import { Provider } from "react-redux";
import App from "./core/app/app";
import { store } from "./core/store/store";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
