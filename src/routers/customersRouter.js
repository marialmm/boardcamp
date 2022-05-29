import { Router } from "express";
import {
    editCustomer,
    getCustomer,
    getCustomers,
    sendCustomer,
} from "./../controllers/customersControllers.js";
import { validateSchema } from "../middlewares/joiValidationMiddleware.js";
import { customerSchema } from "./../schemas/customersSchemas.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomer);
customersRouter.post(
    "/customers",
    (req, res, next) => {
        validateSchema(req, res, next, customerSchema);
    },
    sendCustomer
);
customersRouter.put(
    "/customers/:id",
    (req, res, next) => {
        validateSchema(req, res, next, customerSchema);
    },
    editCustomer
);

export default customersRouter;
