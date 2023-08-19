import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'


const CompShowProductos = () => {

    const [productos, setProducto] = useState([])
    useEffect(() => {
        getProductos()
    }, [])

    //procedimineto para mostrar todos los blogs
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteProducto = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProductos()
    }
/*Estructura html*/
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre_producto</th>
                                <th>Precio_producto</th>
                                <th>Cantidad_producto</th>
                                <th>Tipo_producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            /*Es esencial tener claro el uso de arrays para listar los datos*/
                            {Array.from(productos).map((producto) => (
                                <tr key={producto.id}>
                                    <td> {producto.nombre_producto} </td>
                                    <td> {producto.precio_producto} </td>
                                    <td> {producto.cantidad_producto} </td>
                                    <td> {producto.tipo_producto} </td>
                                    <td>
                                        <Link to={`/edit/${producto.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteProducto(producto.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowProductos