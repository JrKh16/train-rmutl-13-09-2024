import express from "express";
import {HelloController} from "../controllers/helloController";
import {furitsController} from '../controllers/furitsController';

const router = express.Router();

router.get("/hello", async (_req, res) => {
  const controller = new HelloController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/furits", async (_req, res) => {
  const controller = new furitsController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;

// https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717