import { NODE_ENV, API_HOST, STATIC_VERSION } from "../constants";

export const getEnvironmentVariablesMarkup = (): string =>
  `window.process=${JSON.stringify({
    env: {
      NODE_ENV,
      API_HOST,
      STATIC_VERSION,
    },
  })};`;
