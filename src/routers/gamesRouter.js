import { Router } from "express";
import { validateSchema } from "../middlewares/joiValidationMiddleware.js";
import { gameSchema } from "./../schemas/gamesSchemas.js";
import { getGames, sendGame } from "./../controllers/gamesControllers.js";
import { checkGameExists } from "../middlewares/checkExistsMiddleware.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post(
    "/games",
    (req, res, next) => {
        validateSchema(req, res, next, gameSchema);
    }, checkGameExists,
    sendGame
);

export default gamesRouter;
