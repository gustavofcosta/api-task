import { Router } from "express";

import homeController from "../controllers/HomeController";

const router = Router();

router.get("/", homeController.findAll);

export default router;
