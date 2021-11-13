import React, { useState } from 'react'
import '../../Style/estilos.css'
import HeaderTablaProducto from './HeaderTablaProducto';
import { Fragment } from 'react/cjs/react.production.min';
import ModalProducto from './ModalProducto';
import FilaTabla from './FilaTabla';
import ModalEliminarProducto from './ModalEliminarProducto';

function Cuerpo() {

  const [tituloModal, setTituloModal] = useState("");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [idProductoEliminar, setIdProductoEliminar] = useState("");
  const [statusEliminar, setStatusEliminar] = useState("");
  const [idProductoEditar, setIdProductoEditar] = useState("");

  function getData2(val){
    setIdProductoEliminar(val);
  }  

  function getDataEditar2(val) {
    setIdProductoEditar(val);
  }
  
  return (
    <Fragment>
      <div className="col-xl-10 col-md-10">
        <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Productos</h1>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="row">
              <div className="col-auto">
                <button
                  className="btn btn-success mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalProducto"
                  onClick={e => setTituloModal("Registrar producto")}
                >
                  Crear Producto
                </button>
              </div>
              <div class="col-4 offset-md-5 offset-lg-5">
                <input type="text" class="form-control" id="campoBuscar" placeholder="Buscar por ID o descripción"
                  onChange={e => setTextoBuscar(e.target.value)}
                  value={textoBuscar}
                />
              </div>
            </div>
            <table className="table table-striped">
              <HeaderTablaProducto></HeaderTablaProducto>
              <tbody>
                <FilaTabla textoBuscar={textoBuscar} setTextoBuscar={setTextoBuscar} 
                sendData2={getData2} sendDataEditar2={getDataEditar2}></FilaTabla>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal Fade */}
      <div className="modal fade"
        id="modalProducto"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalProducto tituloModal={tituloModal} setTituloModal={setTituloModal} 
            idProductoEditar={idProductoEditar} setIdProductoEditar={setIdProductoEditar}></ModalProducto>
          </div>
        </div>
      </div>
      <div className="modal fade"
        id="modalEliminar"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalEliminarProducto idProductoEliminar={idProductoEliminar} setIdProductoEliminar={setIdProductoEliminar}></ModalEliminarProducto>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default Cuerpo