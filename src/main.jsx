import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "./Component/GlobalStateContext";
import { SnackbarProvider } from "./Component/SnackBarContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStateProvider>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </GlobalStateProvider>
  </StrictMode>
);
