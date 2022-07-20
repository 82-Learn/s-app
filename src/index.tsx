import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";
import history from "./utils/history";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";

Amplify.configure(awsconfig);

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
  onRedirectCallback,
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
