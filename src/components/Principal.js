import React, { useEffect, useState } from "react";
import axios from "axios";

const Principal = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/recomendaciones/principal")
      .then((res) => {
        console.log("✅ Datos recibidos en frontend:", res.data);
        setPeliculas(res.data);
      })
      .catch((err) => {
        console.error("❌ Error al traer recomendaciones:", err);
      });
  }, []);


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recomendaciones</h1>
      <div style={styles.grid}>
        {peliculas.length === 0 ? (
          <p style={styles.text}>No hay recomendaciones disponibles</p>
        ) : (
          peliculas.map((peli, idx) => (
            <div key={idx}>
              <img src={peli.imagen} alt="" style={{ width: '200px', height: 'auto' }} />
              <p>Rating: {peli.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Principal;

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "40px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#111",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  text: {
    marginTop: "10px",
    fontSize: "1rem",
  },
};
