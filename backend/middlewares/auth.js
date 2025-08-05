const jwt  = require('jsonwebtoken');
const User = require('../models/user');
const asyncHandler= require('../helpers/asyncHandler');

exports.protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token  = header.startsWith('Bearer ') ? header.split(' ')[1] : null;

  if (!token) return res.status(401).json({ msg: 'Token requerido' });

  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  req.user     = await User.findById(id).select('-password');
  if (!req.user) return res.status(401).json({ msg: 'Token inválido' });

  next();
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.subscriptionLevel))
      return res.status(403).json({ msg: 'Sin permiso' });
    next();
  };