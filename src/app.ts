import dotenv from "dotenv";

import express, { Application } from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

class App {
  app: Application;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/v1", homeRoutes);
    this.app.use("/api/v1/tasks", taskRoutes);
  }
}

export default new App().app;
