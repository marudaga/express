import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use("/stories", storyRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
