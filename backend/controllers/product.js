const Product = require("../models/product");
const Category = require("../models/category");
const asyncHandler = require("../helpers/asyncHandler");

const unselectProperties = "-__v -createdAt -updatedAt";

exports.create = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

exports.list = asyncHandler(async (req, res) => {
  const { category, isService } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (isService) filter.isService = isService === "true";
  const products = await Product.find(filter)
    .lean()
    .select(unselectProperties)
    .populate({ path: "category", select: unselectProperties });
  res.json(products);
});

exports.getOne = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .lean()
    .select(unselectProperties)
    .populate({ path: "category", select: unselectProperties });
  if (!product) return res.status(404).json({ msg: "No existe" });
  res.json(product);
});

exports.update = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      isAuctioned: true,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!product) return res.status(404).json({ msg: "No existe" });
  res.json(product);
});

exports.remove = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

exports.listByCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const products = await Product.find({ category: id })
    .lean()
    .select(unselectProperties)
    .populate({ path: "category", select: unselectProperties });

  if (!products.length)
    return res.status(404).json({ msg: "Sin productos para esta categoría" });

  res.json(products);
});

exports.listByCategoryType = asyncHandler(async (req, res) => {
  const { type } = req.params;

  const categories = await Category.find({ type: type }).select("_id");
  const categoryIds = categories.map((c) => c._id);

  const products = await Product.find({ category: { $in: categoryIds } })
    .lean()
    .select(unselectProperties)
    .populate({ path: "category", select: unselectProperties });

  if (!products.length)
    return res.status(404).json({ msg: "Sin productos para esta categoría" });

  res.json(products);
});
