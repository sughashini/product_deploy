
const productController = require('../controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getSingleProduct);
router.post('/api/products', productController.addNewProduct);
router.put('/api/products', productController.updateExistProduct);
router.delete('/api/products', productController.deleteProduct);

module.exports = router


