import express, { Express } from "express";
import path from "path";

const cwd = process.cwd();

export const staticMiddleware = (app: Express) => {
  app.use(
    "/",
    express.static(path.join(cwd, "build", "public"), {
      maxAge: 31536000000,
    })
  );
  app.use(
    "/client",
    express.static(path.join(cwd, "build", "client"), {
      maxAge: 31536000000,
    })
  );
};
