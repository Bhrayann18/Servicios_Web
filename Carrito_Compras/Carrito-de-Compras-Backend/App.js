/*Se importa la dependencia de express*/
const express = require("express");
/*Se importa la dependencia de cors*/
const cors = require("cors");

/*Se importa la carpeta database y el archivo que contiene la conexion con mongoDb*/
const db = require("./database");
/*Importe de la carpeta controllers*/
const controllers = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

/*Ahora se le asigna un metodo a cada controlador*/

/* GET */
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

/* POST */
app.post("/products-cart", controllers.addProductCart);

/* PUT */
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/:productId", controllers.deleteProduct);

/*Se asigna el puerto y el mensaje de que el puerto y la conexion a la Db esten funcionando*/
app.listen(4000, () => {
  console.log("Server funcionando en el puerto 4000");
  db();
});

module.exports = app;
