import React, { useEffect, useState } from 'react'
import EliminarProducto from './EliminarProducto';
import EditarProducto from './EditarProducto';
import { getProductosSE } from '../../services/Productos.service';
function CuerpoTablaUsuario(props) {
    const { textoBuscar, setTextoBuscar, sendData2, sendDataEditar2 } = props;

    function getData(val){
        sendData2(val);
    }        
    function getDataEditar(val) {
        sendDataEditar2(val);
    }
    useEffect(() => {
        getProductos();
    }, []);

    const [productos, setProductos] = useState([]);
    const getProductos = async function () {
        try {
            const { data } = await getProductosSE();
            setProductos(data.productos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        productos.filter(function (item) {
            if (item.descripcion === undefined) {
                item.descripcion = "";
            }
            if (textoBuscar === "" || item.descripcion.includes(textoBuscar) || item._id.includes(textoBuscar)) {
                return true;
            }
        }).map((producto, index) => (
            <tr key={producto._id}>
                <td>{producto._id}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.valor_unitario}</td>
                <td>{producto.disponible ? "Sí" : "No"}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <EditarProducto id={producto._id} sendDataEditar={getDataEditar}></EditarProducto>
                        <EliminarProducto id={producto._id} sendData={getData}></EliminarProducto>
                    </div>

                </td>
            </tr>
        ))
    );
}

export default CuerpoTablaUsuario
