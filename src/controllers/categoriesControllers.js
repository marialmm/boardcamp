import { categorieSchema } from "./../schemas/categoriesSchemas.js";
import connection from "./../db.js";

export async function getCategories(req, res) {
    try {
        const result = await connection.query("SELECT * FROM categories");

        res.status(200).send(result.rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function sendCategory(req, res) {
    const validation = categorieSchema.validate(req.body, {
        abortEarly: false,
    });

    if (validation.error) {
        console.log(validation.error.details.map((detail) => detail.message));
        res.sendStatus(400);
        return;
    }

    try {
        const result = await connection.query(
            `
            SELECT * 
            FROM categories 
            WHERE name=$1`,
            [req.body.name]
        );

        if (result.rows.length > 0) {
            res.sendStatus(409);
            return;
        }

        await connection.query(
            `
            INSERT INTO categories (name)
            VALUES($1);
        `,
            [req.body.name]
        );

        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
