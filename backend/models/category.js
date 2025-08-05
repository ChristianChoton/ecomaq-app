const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name:        { type: String, required: true, unique: true, trim: true },
  description: { type: String },
  rute:        { type: String },
  type:        { type: String, enum: ['product', 'machinery', 'both'], default: 'both' }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);