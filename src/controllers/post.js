import { Router } from "express";
import prisma from "../lib/prisma.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

postRouter.get("/:id", async (req, res) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(post);
});

postRouter.post("/", async (req, res) => {
  // const
  const post = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
  res.status(201).json(post);
});

postRouter.put("/:id", async (req, res) => {
  const post = await prisma.post.update({
    where: { id: Number(req.params.id) },
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
  res.json(post);
});

postRouter.delete("/:id", async (req, res) => {
  await prisma.post.delete({
    where: { id: Number(req.params.id) },
  });
  res.status(200).json({ msg: "succesfully deleted" });
});

export default postRouter;
