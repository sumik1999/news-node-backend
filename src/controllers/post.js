import { Router } from "express";
import prisma from "../lib/prisma.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

postRouter.get("/:id", async (req, res) => {
  const posts = await prisma.post.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(posts);
});

postRouter.post("/", async (req, res) => {
  // const
  const post = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
  res.json(post);
});

export default postRouter;
