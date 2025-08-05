const Order = require('../models/order');
const Product = require('../models/product');
const asyncHandler = require('../helpers/asyncHandler');

const buildOrderItems = async (items) => {
  const lines   = [];
  let subtotal  = 0;

  for (const it of items) {
    const prod = await Product.findById(it.product);
    if (!prod) throw new Error(`Producto no encontrado: ${it.product}`);

    const unitPrice = prod.price;
    const lineTotal = unitPrice * (it.quantity || 1);
    subtotal += lineTotal;

    lines.push({
      product : prod._id,
      name    : prod.name,
      unitPrice,
      quantity: it.quantity || 1,
    });
  }
  const tax   = +(subtotal * 0.18).toFixed(2);
  const total = subtotal + tax;
  return { lines, subtotal, tax, total };
};

exports.create = asyncHandler(async (req, res) => {
  const { lines, subtotal, tax, total } = await buildOrderItems(req.body.items);

  const order = await Order.create({
    user   : req.user._id,
    items  : lines,
    subtotal,
    tax,
    total,
    status : 'pending',
  });

  res.status(201).json(order);
});

exports.listMine = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort('-createdAt');
  res.json(orders);
});

exports.getOne = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    _id : req.params.id,
    user: req.user._id,
  }).populate('items.product');
  if (!order) return res.status(404).json({ msg: 'No existe' });
  res.json(order);
});

// exports.updateStatus = asyncHandler(async (req, res) => {
//   const order = await Order.findByIdAndUpdate(
//     req.params.id,
//     { status: req.body.status },
//     { new: true }
//   );
//   if (!order) return res.status(404).json({ msg: 'No existe' });
//   res.json(order);
// });