import React, { useEffect, useState } from "react";
import register_styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

//icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState();

  const [passwordRequirements, setPasswordRequirements] = useState(false)

  const [Message, setMessage] = useState('')
  const [MessageClass, setMessageClass] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault();
    
    try{
      if(!isRegistered) {
        setIsRegistered(true)
        await doCreateUserWithEmailAndPassword(email, password);
        setMessage("Cuenta creada Exitosamente")
        setMessageClass('success')
      }
    }catch(error){
      setMessageClass('error')
      setMessage('Ocurrió un error. Llena los datos correctamente')
      setIsRegistered(false)
    }

  };

  useEffect(() => {
    password.length >= 6 ? setPasswordRequirements(true) : setPasswordRequirements(false);
  }, [password]);

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

        <div className={register_styles.requirement}>
        </div>

            <ul className={register_styles['List-requirements']}>
              {
                passwordRequirements?
                  <li style={{color:'#00FF00' }}>La contraseña debe tener mínimo 6 caracteres <CheckCircleIcon sx={{ fontSize: 18, verticalAlign: 'middle' }}/></li>
                  :
                  <li style={{ color: 'red' }}>La contraseña debe tener mínimo 6 caracteres <ErrorIcon sx={{ fontSize: 18, verticalAlign: 'middle' }} /> </li>
              }
            </ul>

        {/* Mensaje de estado con clase dinámica */}
        {Message && (
          <div className={`${register_styles.message} ${register_styles[MessageClass]}`}>
            <p>{Message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
