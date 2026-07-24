import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App";

// Initialize Google Analytics
ReactGA.initialize("G-P9E5ZTLHQN");

// Track the first page load
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);