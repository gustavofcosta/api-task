import { Request, Response } from "express";

class HomeController {
  async findAll(req: Request, res: Response) {
    res.json("API CRUD TASKS");
  }
}

export default new HomeController();
