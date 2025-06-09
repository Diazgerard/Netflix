const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.post('/signup', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const pool = await poolPromise;
    await pool.request()
      .input('nombre', sql.NVarChar, nombre)
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, password)
      .query('INSERT INTO usuarios (nombre, email, password) VALUES (@nombre, @email, @password)');

    res.status(200).json({ mensaje: 'Usuario registrado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, password)
      .query('SELECT * FROM usuarios WHERE email = @email AND password = @password');

    if (result.recordset.length > 0) {
      res.status(200).json({ mensaje: 'Login correcto' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (err) {
    console.error('❌ Error en el login:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});


module.exports = router;
