const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId;

const Venta = new Schema({
  id: ObjectId,
  codigo_venta: { type: String, require: true},
  id_producto: { type: Schema.Types.ObjectId, ref: 'Producto'},
  medio_pago: { type: String, require: true},
  fecha_venta: { type: String, require: true},
  cliente: { type: String, require: true},
  ide_cliente: { type: Number, require: true},
  vendedor: { type: String, require: true},
  estado: {type: String, require: true},
  valor_total: {type: Number, require: true}
  
});

module.exports = model('Venta', Venta);

