const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId;

const Producto = new Schema({
  id: ObjectId,
  descripcion: { type: String, require: true},
  valor_unitario: { type: Number, require: true},
  disponible: {type: Boolean, require: true}
});

module.exports = model('Producto', Producto);