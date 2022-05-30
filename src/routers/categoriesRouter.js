import { Router } from "express";

import { checkCategoryExists } from "./../middlewares/checkExistsMiddleware.js";
import { validateSchema } from "./../middlewares/joiValidationMiddleware.js";
import { categorySchema } from "./../schemas/categoriesSchemas.js";
import {
    getCategories,
    sendCategory,
} from "./../controllers/categoriesControllers.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);

categoriesRouter.post(
    "/categories",
    (req, res, next) => {
        validateSchema(req, res, next, categorySchema);
    },
    checkCategoryExists,
    sendCategory
);

export default categoriesRouter;
