/*Se importa el modulo de axios*/
import axios from "axios";
/*Se importa para usar estados y otras caracteristicas sin escribir cierta clase*/
import React, { useEffect, useState } from "react";
/*Este permite mediante el codigo la navegacion en react*/
import { useNavigate } from "react-router-dom";
/*Se importa la carpeta modules*/
import styles from "./styles.module.scss";

/*Se tiene en cuenta el atributo a mostrar*/
const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

/*Se especifica el puerto con axios*/
  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);
/*Estrcutura html con los eventos*/
  return (
    <div className={styles.welcome}>
      <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>
        {name ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}
      </h2>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Register</button>
      </div>
    </div>
  );
};

export default Welcome;
