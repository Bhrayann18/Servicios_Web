import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
/*Se le asigna el puerto al controlador productos*/
const URI = 'http://localhost:8000/productos/'
/*Atributos a utilizar en el front*/
const CompEditProducto = () => {
    const [nombre_producto, setNombre_producto] = useState('')
    const [precio_producto, setPrecio_producto] = useState('')
    const [cantidad_producto, setCantidad_producto] = useState('')
    const [tipo_producto, setTipo_producto] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre_producto: nombre_producto,
            precio_producto: precio_producto,
            cantidad_producto: cantidad_producto,
            tipo_producto: tipo_producto

        })
        navigate('/')
    }

    useEffect(() => {
        getProductoById()
    }, [])
/*Como se edita se tiene en cuenta el uso de la id para editar el registro y sus atributos*/
    const getProductoById = async () => {
        const res = await axios.get(URI + id)
        setNombre_producto(res.data.nombre_producto)
        setPrecio_producto(res.data.precio_producto)
        setCantidad_producto(res.data.cantidad_producto)
        setTipo_producto(res.data.tipo_producto)
    }
/*Estructura html*/
    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={nombre_producto}
                        onChange={(e) => setNombre_producto(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        value={precio_producto}
                        onChange={(e) => setPrecio_producto(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        value={cantidad_producto}
                        onChange={(e) => setCantidad_producto(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        value={tipo_producto}
                        onChange={(e) => setTipo_producto(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )

}

export default CompEditProducto