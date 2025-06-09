import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        
        navigate('/principal');
      } else {
        
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Iniciar Sesión</h1>
      <form style={styles.form} onSubmit={handleLogin}>
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
          Iniciar sesión
        </button>
      </form>
      <p style={styles.text}>
        ¿No tienes cuenta? <a href="/signup" style={styles.link}>Regístrate</a>
      </p>
    </div>
  );
};

export default Login;

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
