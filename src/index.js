import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Store from "./store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={Store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
