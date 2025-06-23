import ReactDOM from "react-dom/client";
import { Overlay } from "./overlay/Overlay";

function mountOverlay() {
  let container = document.getElementById("ai-overlay-root");
  if (!container) {
    container = document.createElement("div");
    container.id = "ai-overlay-root";
    document.body.appendChild(container);
  }

  const root = ReactDOM.createRoot(container);
  root.render(<Overlay />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountOverlay);
} else {
  mountOverlay();
}
