const Category = require('../models/category');
const asyncHandler = require('../helpers/asyncHandler');

exports.create = asyncHandler(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});

exports.list = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

exports.getOne = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ msg: 'No existe' });
  res.json(category);
});

exports.update = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!category) return res.status(404).json({ msg: 'No existe' });
  res.json(category);
});

exports.remove = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.status(204).end();
});