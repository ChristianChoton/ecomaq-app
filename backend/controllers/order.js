const Order = require("../models/order");
const asyncHandler = require("../helpers/asyncHandler");

const unselectProperties = "-__v -createdAt -updatedAt";

exports.create = asyncHandler(async (req, res) => {
  const { user, items, subtotal, tax, total, shipper, status } = req.body;
  const order = await Order.create({
    user,
    items,
    subtotal,
    tax,
    shipper,
    total,
    status,
  });

  res.status(201).json(order);
});

exports.listMine = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .sort("-createdAt")
    .lean()
    .select(unselectProperties);
  res.json(orders);
});

exports.getOne = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user._id,
  }).populate("items.product");
  if (!order) return res.status(404).json({ msg: "No existe" });
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
