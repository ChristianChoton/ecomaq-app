const Comment = require("../models/comment");
const asyncHandler = require("../helpers/asyncHandler");

const unselectProperties = "-__v -updatedAt";

exports.create = asyncHandler(async (req, res) => {
  const { user, detail } = req.body;
  const comment = await Comment.create({
    user,
    detail
  });

  res.status(201).json(comment);
});

exports.listMine = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ user: req.user._id })
    .sort("-createdAt")
    .lean()
    .select(unselectProperties);
  res.json(comments);
});