const jwt         = require('jsonwebtoken');
const User        = require('../models/user');
const asyncHandler= require('../helpers/asyncHandler');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const user = await User.create({ email, password, firstName, lastName });
  const token = signToken(user._id);
  res.status(201).json({ token });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password)))
    return res.status(400).json({ msg: 'Credenciales inválidas' });

  const token = signToken(user._id);
  res.json({ token });
});


