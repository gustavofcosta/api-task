import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TaskController {
  async findAll(req: Request, res: Response) {
    try {
      const allTasks = await prisma.task.findMany();

      return res.status(200).json(allTasks);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const task = await prisma.task.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!task)
        return res.json({ msg: `Nenhuma tarefa com o id: ${id} encontrada` });

      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title, isCompleted } = req.body;

      const newTask = await prisma.task.create({
        data: {
          title,
          isCompleted,
        },
      });

      return res.status(200).json(newTask);
    } catch (error) {
      return res.status(500).json({ error: [error] });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, isCompleted } = req.body;

      const task = await prisma.task.findUnique({ where: { id: Number(id) } });

      if (!task)
        return res
          .status(404)
          .json({ msg: `Nenhuma tarefa com o id: ${id} encontrada` });

      const newTask = await prisma.task.update({
        where: {
          id: Number(id),
        },
        data: {
          title,
          isCompleted,
        },
      });

      return res.status(200).json(newTask);
    } catch (error) {
      return res.status(500).json({ error: [error] });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const task = await prisma.task.findUnique({ where: { id: Number(id) } });

      if (!task)
        return res
          .status(404)
          .json({ msg: `Nenhuma tarefa com o id: ${id} encontrada` });

      await prisma.task.delete({ where: { id: Number(id) } });

      return res.status(200).json({ msg: "tarefa excluída com sucesso" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new TaskController();
