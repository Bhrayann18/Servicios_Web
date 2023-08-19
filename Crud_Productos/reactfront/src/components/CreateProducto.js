import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/*Se le asigna el puerto al controlador productos*/
const URI = 'http://localhost:8000/productos/'
/*Atributos a utilizar en el front*/
const CompCreateProducto = () => {
    const [nombre_producto, setNombre_producto] = useState('')
    const [precio_producto, setPrecio_producto] = useState('')
    const [cantidad_producto, setCantidad_producto] = useState('')
    const [tipo_producto, setTipo_producto] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre_producto: nombre_producto, precio_producto: precio_producto, cantidad_producto: cantidad_producto, tipo_producto: tipo_producto })
        navigate('/')
    }
/*Estructura html*/
    return (
        <div>
            <h3>CREAR REGISTRO</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre_producto </label>
                    <input
                        value={nombre_producto}
                        onChange={(e) => setNombre_producto(e.target.value)}
                        type="text"
                        className='form-control'
                        style={{ width: '30%', marginLeft: '35%' }}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio_producto</label>
                    <input
                        value={precio_producto}
                        onChange={(e) => setPrecio_producto(e.target.value)}
                        type="text"
                        className='form-control'
                        style={{ width: '30%', marginLeft: '35%' }}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cantidad_producto</label>
                    <input
                        value={cantidad_producto}
                        onChange={(e) => setCantidad_producto(e.target.value)}
                        type="text"
                        className='form-control'
                        style={{ width: '30%', marginLeft: '35%' }}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Tipo_producto</label>
                    <input
                        value={tipo_producto}
                        onChange={(e) => setTipo_producto(e.target.value)}
                        type="text"
                        className='form-control'
                        style={{ width: '30%', marginLeft: '35%' }}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>REGISTRAR</button>
            </form>
        </div>
    )
}

export default CompCreateProducto