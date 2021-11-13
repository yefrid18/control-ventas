const express = require('express');

const pool = require('../settings/db');
const Producto = require('../models/Producto');

let getProductos = async function(req, res) {
    const model = await Producto.find();
    Producto.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener productos",
                err: err
            });
        }
            res.json({
                status: 200,
                total: total,
                productos: model
            });
    });
}

let getProductoById = async function(req, res) {
    const model = await Producto.findById(req.params.id);
    Producto.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener producto por id",
                err: err
            });
        }
            res.json({
                status: 200,
                total: total,
                productos: model
            });
    });
}

let addProducto = async function(req, res) {
    const {descripcion, precio, disponible} = req.body;
    const producto = await new Producto({
        descripcion,
        valor_unitario: precio,
        disponible
    });
    try{
        producto.save();
        res.status(200).send({ok: true, mensaje: "Producto registrado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al registrar producto", error: error});
    }
}

let editProducto = async function (req, res) {
    const { _id, descripcion, precio, disponible } = req.body;
    const editProducto = {
        descripcion, valor_unitario: precio, disponible
    }
    try {
        const producto = await Producto.updateOne({_id: _id}, editProducto);
        res.status(200).send({ok: true, mensaje: "Producto actualizado correctamente"});
    } catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al actualizar producto", error: error});
    }
}

let deleteProducto = async function (req, res) {
    try{
        let id = req.body;
        await Producto.findOneAndDelete({_id: id});
        res.status(200).send({ok: true, mensaje: "Producto eliminado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al eliminar producto", error: error});
    }
}

module.exports = {
    getProductos,
    addProducto,
    editProducto,
    deleteProducto,
    getProductoById
}