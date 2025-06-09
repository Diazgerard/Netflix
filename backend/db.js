const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'MyNewPass@123',
  server: 'localhost', // porque te conectás desde el host
  port: 11433, // porque el puerto 1433 fue mapeado a 11433
  database: 'NetflixDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('🟢 Conectado a SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('🔴 Error al conectar a SQL Server', err);
  });

module.exports = { sql, poolPromise };
