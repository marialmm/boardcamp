import { Router } from "express";
import { validateSchema } from "../middlewares/joiValidationMiddleware.js";
import { rentalSchema } from "./../schemas/rentalsSchemas.js";
import {
    deleteRental,
    getRentals,
    returnRental,
    sendRental,
} from "./../controllers/rentalsControllers.js";
import { checkRentalExists } from "../middlewares/checkExistsMiddleware.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post(
    "/rentals",
    (req, res, next) => {
        validateSchema(req, res, next, rentalSchema);
    },
    sendRental
);
rentalsRouter.post("/rentals/:id/return", checkRentalExists, returnRental);
rentalsRouter.delete("/rentals/:id", checkRentalExists, deleteRental);

export default rentalsRouter;
