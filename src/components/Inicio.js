import React from "react";
import { useNavigate } from "react-router-dom";


const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sistema Recomendador</h1>
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.loginButton }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          style={{ ...styles.button, ...styles.signUpButton }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Inicio;


const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "60px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    fontSize: "1.5rem",
    padding: "15px 40px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  loginButton: {
    backgroundColor: "#e50914",
    color: "#fff",
  },
  signUpButton: {
    backgroundColor: "#e50914",
    color: "#fff",
  },
};
