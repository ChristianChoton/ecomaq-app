const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  description:  { type: String },
  price:        { type: Number, required: true, min: 0 },
  imageCode:    { type: String, required: true },
  rating:       { type: Number },
  stock:        { type: Number },
  currency:     { type: String },
  category:     { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  isAuctioned:  { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);