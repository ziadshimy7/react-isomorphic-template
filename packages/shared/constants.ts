export const { NODE_ENV, API_HOST, STATIC_VERSION } = process.env;

export const isProduction = NODE_ENV === "production";
export const isStaticVersion = STATIC_VERSION === "true";
