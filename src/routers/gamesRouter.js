import { Router } from "express";
import { validateSchema } from "./../middlewares/validationMiddleware.js";
import { gameSchema } from "./../schemas/gamesSchemas.js";
import { getGames, sendGame } from "./../controllers/gamesControllers.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post(
    "/games",
    (req, res, next) => {
        validateSchema(req, res, next, gameSchema);
    },
    sendGame
);

export default gamesRouter;
