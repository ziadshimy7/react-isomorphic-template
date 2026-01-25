export const { NODE_ENV, HOST, API_HOST } = process.env;

export const isProduction = NODE_ENV === "production";

export const appRootId = "app" as const;
