import { Router } from "express";

const routes = new Router();

routes.get("/", async (req, res) => {
  res.send("<h1>hey</h1>");
});

// routes.get("/example", example.get);

export default routes;
