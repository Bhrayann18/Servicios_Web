/*Se importa pora del paquete modules la dependencia de moongose */
const { model, Schema } = require("mongoose");
/* Aqui se asignan los atributos a utilizar para el registro y inicio de esion*/ 
const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});
/*Se exporta el modelo */
module.exports = model("Usuario", UsuarioSchema);