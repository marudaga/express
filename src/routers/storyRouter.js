import express from "express";
import { edit, remove } from "../contollers/storiesController";
import { Id } from "../contollers/userController";

const storyRouter = express.Router();

storyRouter.get("/:id", Id);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", remove);

export default storyRouter;
