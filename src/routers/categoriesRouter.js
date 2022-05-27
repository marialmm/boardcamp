import { Router} from "express";

import { getCategories, sendCategory } from "./../controllers/categoriesControllers.js";

const categoriesRouter = Router();

categoriesRouter.get('/categories', getCategories);

categoriesRouter.post('/categories', sendCategory);

export default categoriesRouter;