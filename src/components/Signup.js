import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault(); // evita recargar la página

    try {
      const response = await fetch('http://localhost:3001/api/usuarios/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        
        navigate('/principal');
      } else {
        
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Crear Cuenta</h1>
      <form style={styles.form} onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Registrarse
        </button>
      </form>
      <p style={styles.text}>
        ¿Ya tienes una cuenta? <a href="/login" style={styles.link}>Inicia sesión</a>
      </p>
    </div>
  );
};

export default Signup;


const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    gap: "20px",
  },
  input: {
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "15px",
    fontSize: "1.2rem",
    backgroundColor: "#e50914",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  text: {
    marginTop: "30px",
    fontSize: "1rem",
  },
  link: {
    color: "#e50914",
    textDecoration: "none",
  },
};
