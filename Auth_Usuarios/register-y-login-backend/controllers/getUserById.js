/*Se importa de la carpeta models*/
const Usuario = require("../model/usuario");

/*Como se va a buscar un registro mediante la id trabajamos con un req.user */
const getUserById = async (req, res) => {
  const { id } = req.user;
/*En este arreglo la id debe contener maximo 24 caracteres ni mas ni menos*/
/*Ahora se envia los mensajes mediante los siguientes arreglos*/
  if (id.length === 24) {
    Usuario.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con esa ID",
        });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUserById;