import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Overlay } from "./overlay/Overlay";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Overlay />
  </StrictMode>
);
