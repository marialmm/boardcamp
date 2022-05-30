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
    try {
        

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
