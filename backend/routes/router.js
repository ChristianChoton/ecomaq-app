const express = require('express');
const authCtl = require('../controllers/auth');
const userCtl = require('../controllers/user');
const catCtl  = require('../controllers/category');
const prodCtl = require('../controllers/product');
const ordCtl  = require('../controllers/order');
const comCtl  = require('../controllers/comment');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/auth/register', authCtl.register);
router.post('/auth/login', authCtl.login);

router.get('/users/me', protect, userCtl.getMe);
router.patch('/users/me', protect, userCtl.updateMe);

router.post('/categories', protect, catCtl.create);
router.get('/categories', catCtl.list);
router.get('/categories/:id', catCtl.getOne);
router.get('/categories/:id/products', prodCtl.listByCategory);
router.get('/categories/type/:type/products', prodCtl.listByCategoryType);
router.patch('/categories/:id', protect, catCtl.update);
router.delete('/categories/:id',protect, catCtl.remove);

router.post('/products', protect, prodCtl.create);
router.get('/products', prodCtl.list);
router.get('/products/:id', prodCtl.getOne);
router.patch('/products/:id', protect, prodCtl.update);
router.delete('/products/:id', protect, prodCtl.remove);

router.post('/orders', protect, ordCtl.create);
router.get('/orders', protect, ordCtl.listMine);
router.get('/orders/:id', protect, ordCtl.getOne);

router.post('/comments', protect, comCtl.create);
router.get('/comments', protect, comCtl.listMine);
router.get('/comments/all', protect, comCtl.list);
// router.patch('/orders/:id/status', protect, ordCtl.updateStatus);

module.exports = router;