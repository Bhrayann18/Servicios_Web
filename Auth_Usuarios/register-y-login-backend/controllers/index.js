/*Se importa los controladores ya elaborados*/
const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
/*Se exportan para luego importarlos en el App.js*/
module.exports = {
  register,
  login,
  getUserById,
};