const express = require('express');


const productos = require('../controller/Productos');

const usuarios = require('../controller/Usuarios');

const ventas = require('../controller/Ventas');

const app = express.Router();
const {validarJWT} = require('../middlewares/valid_jwt');

app.use(validarJWT);


app.get("/getProductos", productos.getProductos);

app.get("/getProductoById/:id", productos.getProductoById);

app.post("/addProducto", productos.addProducto);

app.put("/editProducto", productos.editProducto);

app.delete("/deleteProducto", productos.deleteProducto);

app.get("/getVentas", ventas.getVentas);

app.post("/addVenta", ventas.addVenta);

app.put("/editVenta", ventas.editVenta);

app.delete("/deleteVenta", ventas.deleteVenta);

app.get("/getUsuarios" , usuarios.getUsuarios);

//Get usuario by id

app.get("/getUsuarioById/:id", usuarios.getUsuarioById);

// app.post("/addUsuario" , usuarios.addUsuario);

app.put("/editUsuario" , usuarios.editUsuario);

app.delete("/deleteUsuario" , usuarios.deleteUsuario);

app.get("/getVentaById/:id", ventas.getVentaById);

module.exports = app;
