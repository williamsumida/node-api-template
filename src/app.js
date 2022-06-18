import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(morgan("dev"));
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/", routes);
  }
}

export default new App().server;
