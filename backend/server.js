const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuarios');
const recomendacionesRoutes = require('./routes/recomendaciones');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/recomendaciones', recomendacionesRoutes);

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});