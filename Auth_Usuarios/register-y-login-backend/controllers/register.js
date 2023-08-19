/*Para encriptar la contraseña de importa un bcrypt*/
const bcrypt = require("bcrypt");
/*Se importa el modelo*/
const Usuario = require("../model/usuario");

/*Se tiene en cuenta los atributos a utilizar*/
const register = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  /*Se comprueba mediante el atributo del correo si ya esta registrado*/
  /*Tambien se comprueba que todos los datos han sido ingresados*/
  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      /*La contraseña se encripta y debe tener minimo 10 caracteres*/
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHasheada,
          });
          /*Ahora una vez se imgresen los datos de la manera correcta se manda el siguiente mensaje*/
          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;
