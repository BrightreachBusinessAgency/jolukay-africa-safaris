import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-P9E5ZTLHQN";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};