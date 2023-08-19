/*Se importa pora del paquete modules la dependencia de moongose */
const { model, Schema } = require("mongoose");

/* Aqui se asignan los atributos a utilizar para el registro y inicio de esion*/ 
const ProductSchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  inCart: { type: Boolean, default: false },
  price: { type: Number, required: true },
});
/*Se exporta el modelo */
module.exports = model("Product", ProductSchema);
