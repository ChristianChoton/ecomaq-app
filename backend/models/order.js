const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product:     { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name:        { type: String, required: true },
  unitPrice:   { type: Number, required: true },
  quantity:    { type: Number, required: true, min: 1 },
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  items:       { type: [orderItemSchema], required: true },
  subtotal:    { type: Number, required: true },
  tax:         { type: Number, required: true },
  shipper:     { type: Number, required: true },
  total:       { type: Number, required: true },
  status:      { 
    type: String, 
    enum: ['pending', 'paid', 'shipped', 'completed', 'canceled'], 
    default: 'completed' 
  },
  paymentRef:  { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);