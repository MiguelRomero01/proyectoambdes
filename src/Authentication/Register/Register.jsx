import React, { useState } from "react";
import register_styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";


export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log("Registrando con:", { email, password });

    if(!isRegistered) {
      setIsRegistered(true)
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div className={register_styles.page}>
      {setIsRegistered && (<Link to={'/home'} replace={true}/>)}
      <div className={register_styles.container}>
        <h1 className={register_styles.title}>Crear Cuenta</h1>
        <form onSubmit={onSubmit} className={register_styles.form}>

          <label htmlFor="email" className={register_styles.label}>
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={register_styles.input}
            required
          />

          <label htmlFor="password" className={register_styles.label}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={register_styles.input}
            required
          />

          <button type="submit" className={register_styles.button}>
            Registrarse
          </button>
        </form>
        <p className={register_styles.loginText}>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/" className={register_styles.link}>Inicia sesion aquí</Link>
        </p>
      </div>
    </div>
  );
}
