const User = require('../models/user');
const asyncHandler = require('../helpers/asyncHandler');

exports.getMe = asyncHandler(async (req, res) => {
  const { __v, createdAt, updatedAt, ...safeUser } = req.user.toObject();
  res.json(safeUser);
});

exports.updateMe = asyncHandler(async (req, res) => {
  const updates = { ...req.body };
  delete updates.password; 
  const user = await User.findByIdAndUpdate(req.user._id, updates, {
    new: true,
    runValidators: true,
  })
  res.json(user);
});

// exports.getAll = asyncHandler(async (req, res) => {
//   const users = await User.find().select('-password');
//   res.json(users);
// });
