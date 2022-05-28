import { Router } from "express";
import { getGames, sendGame } from "./../controllers/gamesControllers.js";

const gamesRouter = Router();

gamesRouter.get('/games', getGames);
gamesRouter.post('/games', sendGame);

export default gamesRouter;