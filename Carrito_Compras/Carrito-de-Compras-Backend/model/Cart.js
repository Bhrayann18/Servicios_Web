/*Se importa pora del paquete modules la dependencia de moongose */
const { model, Schema } = require("mongoose");

/* Aqui se asignan los atributos a utilizar*/ 
const CartSchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
});
/*Se exporta el modelo */
module.exports = model("Cart", CartSchema);
