/*Se importa del paquete modules*/
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["token"];

  /*Este componente es  un status donde una vez se realiza una peticion devuleve la informacion en un  JWT  */
  if (token) {
    jwt.verify(token, "secreto", (error, data) => {
      if (error) return res.status(400).json({ mensaje: "Token invalido" });
      else {
        req.user = data;
        next();
      }
    });
  } else {
    res.status(400).json({ mensaje: "Debes enviar un token" });
  }
};

module.exports = verifyToken;
