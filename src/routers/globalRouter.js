import express from "express";
import { trending, new1 } from "../controllers/storiesController.js";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

const handleGlobal = (req, res) => res.send("<h1>Home</h1>");

globalRouter.get("/", handleGlobal);
globalRouter.get("/new", new1);
globalRouter.get("/trending", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
