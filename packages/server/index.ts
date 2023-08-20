import express from "express";
import { requestHandler } from "./utils/request-handler";
import { staticMiddleware } from "./middlewares/static-middleware";

const app = express();

staticMiddleware(app);

app.get("/favicon.ico", (_, response) => response.status(204));
app.get("*", async (request, response, next) => {
  requestHandler(request, response, next);
});

app.listen(3000, () => console.log("server started on port 3000"));
