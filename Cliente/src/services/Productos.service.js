import axios from 'axios'

export const getProductosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getProductos`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addProductoSE = async function(producto) {
    try {
        return await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/addProducto`,
            data: producto,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteProductoSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/deleteProducto`,
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const getProductoByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getProductoById/${id}`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const updatProductoSE = async function (producto) {
    try {
        return await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/editProducto`,
            data: producto,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}