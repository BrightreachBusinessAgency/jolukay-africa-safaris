import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App";

// Redirect Railway domain to the custom domain
const hostname = window.location.hostname;

if (hostname.endsWith(".up.railway.app")) {
  window.location.replace(
    `https://www.jolukayafricasafaris.com${window.location.pathname}${window.location.search}${window.location.hash}`
  );
}

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