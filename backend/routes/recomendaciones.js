const express = require("express");
const router = express.Router();
const { poolPromise } = require("../db");

router.get("/principal", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT r.rating, 
             r.movieId, 
             i.imagen_binaria
      FROM recomendaciones r
      JOIN imagenes i ON r.imagen_id = i.id
    `);

    console.log("🟢 Datos enviados:", result.recordset.length);

    const data = result.recordset.map((row) => ({
      movieId: row.movieId,
      rating: row.rating,
      imagen: `data:image/jpeg;base64,${Buffer.from(row.imagen_binaria).toString("base64")}`,
    }));

    res.json(data);
  } catch (error) {
    console.error("🔴 Error al obtener recomendaciones:", error);
    res.status(500).send("Error del servidor");
  }
});

module.exports = router;
