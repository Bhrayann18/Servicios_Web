/*Para encriptar la contraseña de importa un bcrypt*/
const bcrypt = require("bcrypt");
/*Se importa el modelo*/
const Usuario = require("../model/usuario");
/*Se importa el verifyToken*/
const jwt = require("jsonwebtoken");

/*Se tiene en cuenta los atributos a utilizar*/
const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  /*Aqui se busca al usuario mediante su correo*/
  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }
/*Ahora lo que se realiza es la comparacion de la contraseña con el nombre usuario ingresado*/
    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400 /* 24hs */,
        });
/*Una vez el usuario ingrese debera mandar la peticion en un JWT*/
        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;
