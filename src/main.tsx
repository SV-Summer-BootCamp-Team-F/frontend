import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// The root element where React will be mounted.
const root = createRoot(document.getElementById("root") as HTMLElement);

if (import.meta.env.MODE === "development") {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import("./mocks/browser")
    .then(({ worker }) => {
      // Start the worker.
      worker.start();
    })
    .then(() => {
      // Render the application.
      root.render(
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      );
    });
} else {
  // Render the application in production without the MSW.
  root.render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}
