import connection from "./../db.js";

export async function getCategories(req, res){
    const result = await connection.query('SELECT * FROM categories');
    
    console.log(result.rows); 

    res.status(200).send('categorias enviadas');
}