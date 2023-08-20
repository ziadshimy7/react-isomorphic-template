import { Request as ExpressRequest } from "express";

export const createFetchRequest = (request: ExpressRequest) => {
  const origin = `${request.protocol}://${request.get("host")}`;
  const url = new URL(request.originalUrl || request.url, origin);

  return new Request(url);
};
