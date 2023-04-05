const router = require('express').Router();

const customerRoutes = require('./customers');
const productRoutes = require('./products');

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);

module.exports = router;
