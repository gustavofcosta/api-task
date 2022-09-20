import { Router } from "express";

import taskController from "../controllers/TaskController";

const router = Router();

router.get("/", taskController.findAll);
router.get("/:id", taskController.findOne);
router.post("/", taskController.create);
router.delete("/:id", taskController.delete);
router.patch("/:id", taskController.update);

export default router;
