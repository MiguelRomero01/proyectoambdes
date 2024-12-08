import React, { useState } from "react";
import login_styles from "./Login.module.css";
import { Link} from "react-router-dom";
import { doSignInWithEmailAndPassword} from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/home", { replace: true }); // Redirigir al home
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div className={login_styles.page}>
      <div className={login_styles.container}>
        <h1 className={login_styles.title}>Iniciar Sesión</h1>
        <form onSubmit={onSubmit} className={login_styles.form}>
          <label htmlFor="email" className={login_styles.label}>
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={login_styles.input}
            required
          />
          <label htmlFor="password" className={login_styles.label}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={login_styles.input}
            required
          />
          <button type="submit" className={login_styles.button}>
            Iniciar Sesión
          </button>
        </form>
        <p className={login_styles.registerText}>
          ¿No tienes cuenta?{" "}
          <Link to="/register" className={login_styles.link}>
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}
