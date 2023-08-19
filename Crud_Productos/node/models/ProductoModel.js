//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize y se asigna un tipo de dato datatype
import { DataTypes } from "sequelize";
/*Aqui se tiene en cuenta los atributos y el tipo de dato*/
const ProductoModel = db.define('producto', {
    nombre_producto: { type: DataTypes.STRING },
    precio_producto: { type: DataTypes.STRING },
    cantidad_producto: { type: DataTypes.STRING },
    tipo_producto: { type: DataTypes.STRING },
})
export default ProductoModel