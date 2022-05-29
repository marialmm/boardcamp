import { Router } from "express";
import { validateSchema } from "../middlewares/joiValidationMiddleware.js";
import { rentalSchema } from "./../schemas/rentalsSchemas.js";
import { getRentals, sendRental } from "./../controllers/rentalsControllers.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post(
    "/rentals",
    (req, res, next) => {
        validateSchema(req, res, next, rentalSchema);
    },
    sendRental
);

export default rentalsRouter;
