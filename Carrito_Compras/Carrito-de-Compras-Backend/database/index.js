/*Se importa de la carpeta modules*/
const mongoose = require("mongoose");
/*Url para conectar la api con mongoDb*/
const MONGO_URL = "mongodb://localhost:27017";
/*Con este arreglo se comprueba si la conexion esta siendo exitosa*/
const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};
/*Se exporta el archivo db.js*/
module.exports = db