const Cart = require("../model/Cart");

/*Aqui se buscan si hay productos agregado al carrito de compras*/
const getProductsCart = async (req, res) => {
  const productsCart = await Cart.find();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ mensaje: "No hay productos en el carrito" });
  }
};

module.exports = getProductsCart;
