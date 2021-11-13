import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


function Cliente() {
    return (
        <Fragment>

            <div className="col-xl-10 col-md-10">       
                <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Usuarios y Roles</h1>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-10">
                        <div className="row">
                            <div className="col-auto">
                                <button
                                    className="btn btn-outline-success mb-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalUsuario"
                                >
                                Crear Usuario
                                </button>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">N° Cédula</th>
                                <th scope="col">Nombre y Apellido</th>
                                <th scope="col">Rol</th>
                                <th scope="col" id="estado">Estado</th>
                                <th scope="colgroup">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1110552354</td>
                                <td>Julian Padilla</td>
                                <td>Vendedor</td>
                                <td>
                                <select className="form-select">
                                    <option disabled selected>Seleccione</option>
                                    <option value=" 0">Autorizado</option>
                                    <option value="0">Pendiente</option>
                                    <option value=" 0">No autorizado</option>
                                </select>
                                </td>
                                <td>
                                    <div className="btn-group btn-group-sm">
                                        <Link 
                                            className="btn btn-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                </svg>
                                            
                                        </Link>
                                        <Link
                                            className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1027953966</td>
                                <td>Yefrid Morelo</td>
                                <td>Administrador</td>
                                <td>
                                    <select className="form-select">
                                        <option disabled selected>Seleccione</option>
                                        <option value=" 0">Autorizado</option>
                                        <option value="0">Pendiente</option>
                                        <option value=" 0">No autorizado</option>
                                    </select>
                                </td>
                                <td>
                                    <div className="btn-group btn-group-sm">
                                        <Link 
                                            className="btn btn-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                </svg>
                                            
                                        </Link>
                                        <Link
                                            className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>39245698</td>
                                <td>Novedosa Mujer</td>
                                <td>Vendedora</td>
                                <td>
                                    <select className="form-select">
                                        <option disabled selected>Seleccione</option>
                                        <option value=" 0">Autorizado</option>
                                        <option value="0">Pendiente</option>
                                        <option value=" 0">No autorizado</option>
                                    </select>
                                </td>
                                <td>
                                    <div className="btn-group btn-group-sm">
                                        <Link 
                                            className="btn btn-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                </svg>
                                            
                                        </Link>
                                        <Link
                                            className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
    
                    
            </div>
            {/* Modal Fade */}
            <div
                className="modal fade"
                id="modalUsuario"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="tituloModal">Registrar Usuario</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">

                            <div className="row mt-2">
                                <label for="#documento" className="form-label"
                                    >N° Documento</label
                                >
                                <input
                                    type="number"
                                    className="form-control"
                                    id="#documento"
                                    placeholder="1 234 567 890"
                                />
                            </div>

                            <div className="row mt-2">
                                <label for="NombresyApellidos" className="form-label"
                                    >Nombres y apellidos</label
                                >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="NombresyApellidos"
                                    placeholder="Nombre Completo"
                                />
                            </div>

                            <div className="row mt-2">
                                <label for="Rol" className="form-label">Rol</label>
                                <select className="form-select" aria-label="Default select example" id="Rol">
                                    <option selected>Selecciona un rol</option>
                                    <option value="admin">Administrador</option>
                                    <option value="vendedor">Vendedor</option>
                                </select>                         
                            </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cerrar
                        </button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                    
                  </div>
                </div>
             </div>
        </Fragment>
    )
}

export default Cliente
