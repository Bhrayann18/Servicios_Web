/*Se importa la dependencia de express*/
const express = require("express");
/*Se importa la dependencia de cors*/
const cors = require("cors");
/*Se importa la carpeta database y el archivo que contiene la conexion con mongoDb*/
const db = require("./database/db");

/*Importe de la carpeta controllers*/
const controllers = require("./controllers");
/*Importe de la carpeta middlewares*/
const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(cors());
app.use(express.json());

/*Ahora se le asigna un metodo a cada controlador*/
app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

/*Se le asgina el puerto al servidor*/
const PORT = 4000;

/*Se asigna el mensaje de que el puerto y la conexion a la Db esten funcionando*/
app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});
