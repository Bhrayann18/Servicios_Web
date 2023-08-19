/*Se importa los controladores ya elaborados*/
const getProducts = require("./getProducts");
const getProductsCart = require("./GetProductsCart");
const addProductCart = require("./addProductCart");
const putProduct = require("./putProduct");
const deleteProduct = require("./DeleteProduct");
/*Se exportan para luego importarlos en el App.js*/
module.exports = {
  getProducts,
  getProductsCart,
  addProductCart,
  putProduct,
  deleteProduct,
};
