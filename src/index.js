import express from "express";
import chalk from "chalk";
import cors from "cors";

import categoriesRouter from "./routers/categoriesRouter.js";
import gamesRouter from "./routers/gamesRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(categoriesRouter);
app.use(gamesRouter);

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(chalk.green("Server running at port " + port)));