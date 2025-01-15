import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Home from "./containers/Home/index";
import Home from "./pages2/Home/App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Home />
    </StrictMode>
);
