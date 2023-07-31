import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// The root element where React will be mounted.
const root = createRoot(document.getElementById("root") as HTMLElement);

// Render the application in production without the MSW.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
